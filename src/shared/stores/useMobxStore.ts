import { rootStore } from '@shared/stores/RootStore';

export const useMobxStore = () => {
    console.log(rootStore);

    return rootStore;
};
