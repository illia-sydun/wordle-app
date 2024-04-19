import { action, computed, observable } from 'mobx';
import { MobxStore } from '@shared/stores/RootStore';
import { uniqueId } from 'lodash';

export type Snackbar = {
    id: string;
    title: string;
    type: 'message' | 'info' | 'warning' | 'error' | 'success';
    duration?: number;
    onClick?: (snackbar: SnackbarStore) => void;
    onClose?: (snackbar: SnackbarStore) => void;
};

export class SnackbarStore implements Snackbar {
    @observable accessor snackbarsStore: SnackbarsStore;

    id;

    @observable accessor title: Snackbar['title'];
    @observable accessor type: Snackbar['type'];
    @observable accessor duration: Snackbar['duration'];
    @observable accessor onClick: Snackbar['onClick'];
    @observable accessor onClose: Snackbar['onClick'];

    // @TODO added quickly, needs refactor
    @observable accessor expired: boolean;
    @observable accessor timeout: NodeJS.Timeout | undefined;

    constructor(snackbarsStore: SnackbarsStore, snackbar: Snackbar) {
        const { id, title, type, duration, onClick, onClose } = snackbar;

        this.snackbarsStore = snackbarsStore;

        this.id = id;
        this.title = title;
        this.type = type;
        this.duration = duration;
        this.expired = false;
        this.timeout = undefined;
        this.onClick = onClick;
        this.onClose = onClose;

        if (this.duration) {
            this.setDuration(this.duration);
        }
    }

    @action
    handleSetTimeout(timeout: NodeJS.Timeout | undefined) {
        clearTimeout(this.timeout);
        this.timeout = timeout;
    }

    @action
    setTitle(title: string) {
        this.title = title;
    }

    @action.bound
    setDuration(duration: Snackbar['duration']) {
        this.duration = duration;

        clearTimeout(this.timeout);

        this.handleSetTimeout(
            setTimeout(
                action(() => this.snackbarsStore.closeSnackbar(this.id)),
                this.duration,
            ),
        );
    }

    @action
    setExpired() {
        this.expired = true;
    }

    @action.bound
    click() {
        this.onClick?.(this);
    }

    @action.bound
    close() {
        this.snackbarsStore.closeSnackbar(this.id);
        this.onClose?.(this);
    }
}

type Snackbars = {
    snackbars: Record<string, SnackbarStore>;
};

export class SnackbarsStore implements MobxStore, Snackbars {
    @observable accessor rootStore: MobxStore['rootStore'];

    @observable accessor snackbars: Snackbars['snackbars'];

    @observable accessor timeout: NodeJS.Timeout | undefined;

    constructor(rootStore: MobxStore['rootStore']) {
        this.rootStore = rootStore;

        this.snackbars = this.reset();
    }

    @action
    reset() {
        const snackbars = {};
        this.snackbars = snackbars;

        this.handleSetTimeout(undefined);

        return snackbars;
    }

    @action
    handleSetTimeout(timeout: NodeJS.Timeout | undefined) {
        clearTimeout(this.timeout);
        this.timeout = timeout;
    }

    @computed
    get visibleSnackbars() {
        return Object.values(this.snackbars);
    }

    @action.bound
    openSnackbar({
        type = 'message',
        ...options
    }: Omit<Snackbar, 'id' | 'type'> & { type?: Snackbar['type'] }) {
        const snackbar: Snackbar = {
            id: uniqueId('snackbar-'),
            type,
            ...options,
        };
        this.snackbars[snackbar.id] = new SnackbarStore(this, snackbar);
    }

    @action
    delayedOpenSnackbar(options: Omit<Snackbar, 'id'>, delay: number) {
        this.handleSetTimeout(
            setTimeout(
                action(() => this.openSnackbar(options)),
                delay,
            ),
        );
    }

    // @TODO added quickly, needs refactor
    @action
    closeSnackbar(id: Snackbar['id']) {
        this.snackbars[id]?.setExpired();
        setTimeout(() => this.removeSnackbar(id), 450);
    }

    // @TODO added quickly, needs refactor
    @action
    removeSnackbar(id: Snackbar['id']) {
        delete this.snackbars[id];
    }
}
