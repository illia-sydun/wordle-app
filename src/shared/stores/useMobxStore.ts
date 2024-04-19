import { rootStore } from '@shared/stores/RootStore';

// @TODO mobx move it to context
export const useMobxStore = () => {
    return rootStore;
};
