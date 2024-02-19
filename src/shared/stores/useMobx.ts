import { boardStore } from './BoardStore';
import { keyboardStore } from './KeyboardStore';
import { wordStore } from './WordStore';

export const useMobxStores = () => {
    console.log(boardStore, keyboardStore, wordStore);

    return {
        boardStore,
        keyboardStore,
        wordStore,
    };
};
