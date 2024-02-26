import { action, computed, makeObservable, observable } from 'mobx';
import { KeyStatus } from '@shared/types/KeyStatus.ts';
import { CSSProperties } from 'react';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { AnimationState } from '@shared/types/AnimationState.ts';

type Key = {
    value: KeyboardKey;
    label: string;
    state: KeyState;
    animationState: AnimationState;
};

type KeyState = {
    column: number;
    found: boolean;
    visited: boolean;
};

export class KeyStore implements Key {
    @observable accessor value: Key['value'];
    @observable accessor label: Key['label'];
    @observable accessor state: Key['state'];
    @observable accessor animationState: Key['animationState'];

    constructor(key: Key['value']) {
        const { value, label, animationState, state } = this.reset(key);

        this.value = value;
        this.label = label;
        this.animationState = animationState;
        this.state = state;

        makeObservable(this);
    }

    @action
    reset(value: Key['value']) {
        const key: Key = {
            value,
            label: value.toUpperCase(),
            animationState: 'idle',
            state: this.init(),
        };

        this.value = key.value;
        this.label = key.label;
        this.animationState = key.animationState;
        this.state = key.state;

        return key;
    }

    @action
    init(column: Key['state']['column'] = -1) {
        const state: Key['state'] = {
            found: false,
            visited: false,
            column,
        };

        this.state = state;

        return state;
    }

    @computed
    get status(): KeyStatus {
        if (this.state.found) {
            return 'match';
        } else if (this.state.visited) {
            return this.state.column > -1 ? 'close_match' : 'no_match';
        } else {
            return 'empty';
        }
    }

    @computed
    get isMatched() {
        return this.status !== 'empty' && this.status !== 'no_match';
    }

    @computed
    get isClickable() {
        return this.status !== 'no_match';
    }

    @computed
    get computedStyles() {
        const styles: CSSProperties = { gridArea: this.value };

        switch (this.value) {
            case 'backspace':
            case 'enter':
                styles.margin = 'unset';
        }

        return styles;
    }

    @action
    visit(column: Key['state']['column']) {
        this.state.visited = true;

        if (this.state.column === column) {
            this.state.found = true;
        }
    }

    @action.bound
    startAnimation(animationState: Key['animationState']) {
        this.animationState = animationState;
    }

    @action.bound
    stopAnimation() {
        this.animationState = 'idle';
    }
}
