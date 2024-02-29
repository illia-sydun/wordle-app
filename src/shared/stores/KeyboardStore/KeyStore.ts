import { action, computed, observable } from 'mobx';
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
    submitted: boolean;
    submittedAtCell: number;
    matched: boolean;
    matchedAtWordIndex: number;
};

export class KeyStore implements Key {
    @observable accessor value: Key['value'];
    @observable accessor label: Key['label'];
    @observable accessor state: Key['state'];
    @observable accessor animationState: Key['animationState'];

    constructor(key: Key['value']) {
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
            submittedAtCell: -1,
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
    visit(
        matchedAtWordIndex: Key['state']['matchedAtWordIndex'],
        submittedAtCell: number,
    ) {
        this.state.submitted = true;

        if (this.state.matchedAtWordIndex > -1) {
            this.state.submittedAtCell = submittedAtCell;
        }

        if (this.state.matchedAtWordIndex === matchedAtWordIndex) {
            this.state.matched = true;
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
