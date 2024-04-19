import { action, computed, observable } from 'mobx';
import { KeyStatus } from '@shared/types/KeyStatus.ts';
import { AnimationEvent, CSSProperties } from 'react';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { AnimationState } from '@shared/types/AnimationState.ts';
import { MobxStore } from '@shared/stores/RootStore';

type Key = {
    value: KeyboardKey;
    label: string;
    state: KeyState;
    animationState: AnimationState;
};

type KeyState = {
    submitted: boolean;
    matched: boolean;
    matchedAtWordIndex: number;
};

export class KeyStore implements MobxStore, Key {
    @observable accessor rootStore: MobxStore['rootStore'];

    @observable accessor value: Key['value'];
    @observable accessor label: Key['label'];
    @observable accessor state: Key['state'];
    @observable accessor animationState: Key['animationState'];

    constructor(rootStore: MobxStore['rootStore'], key: Key['value']) {
        this.rootStore = rootStore;

        const { value, label, animationState, state } = this.init(key);

        this.value = value;
        this.label = label;
        this.animationState = animationState;
        this.state = state;
    }

    @action
    init(value: Key['value']) {
        const key: Key = {
            value,
            label: value.toUpperCase(),
            animationState: 'idle',
            state: this.resetState(),
        };

        this.value = key.value;
        this.label = key.label;
        this.animationState = key.animationState;
        this.state = key.state;

        return key;
    }

    @action
    setState(matchedAtWordIndex: Key['state']['matchedAtWordIndex']) {
        const state: Key['state'] = {
            matched: false,
            submitted: false,
            matchedAtWordIndex,
        };

        this.state = state;

        return state;
    }

    @action
    resetState() {
        return this.setState(-1);
    }

    @computed
    get status(): KeyStatus {
        if (this.state.matched) {
            return 'match';
        } else if (this.state.submitted) {
            return this.state.matchedAtWordIndex > -1
                ? 'close_match'
                : 'no_match';
        } else {
            return 'empty';
        }
    }

    @computed
    get isNotMatched() {
        return this.status === 'no_match';
    }

    @computed
    get isMatched() {
        return this.status !== 'empty' && !this.isNotMatched;
    }

    @computed
    get isClickable() {
        if (this.value === 'escape') {
            return true;
        }
        // return !this.isNotMatched;
        return this.rootStore.isGamePending;
    }

    @computed
    get computedStyles(): CSSProperties {
        return { gridArea: this.value };
    }

    @action
    visit(matchedAtWordIndex: Key['state']['matchedAtWordIndex']) {
        this.state.submitted = true;

        if (this.state.matchedAtWordIndex === matchedAtWordIndex) {
            this.state.matched = true;
        }

        if (this.isMatched) {
            this.startAnimation('pulse');
        }
    }

    @action
    delayedVisit(
        matchedAtWordIndex: Key['state']['matchedAtWordIndex'],
        delay: number,
    ) {
        setTimeout(
            action(() => {
                this.visit(matchedAtWordIndex);
            }),
            delay,
        );
    }

    @action.bound
    startAnimation(animationState: Key['animationState']) {
        this.animationState = animationState;
    }

    @action.bound
    stopAnimation(event?: AnimationEvent) {
        event?.stopPropagation();
        this.animationState = 'idle';
    }
}
