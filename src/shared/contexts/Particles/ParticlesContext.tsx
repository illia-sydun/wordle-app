import { createContext, PropsWithChildren, useEffect, useMemo } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { useBooleanState } from '@shared/hooks/useBooleanState.ts';

type ParticlesContextValue = {
    isParticlesEngineInitialised: boolean;
};

export const ParticlesContext = createContext<
    ParticlesContextValue | undefined
>(undefined);

export const ParticlesContextProvider = ({ children }: PropsWithChildren) => {
    const isParticlesEngineInitialised = useBooleanState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(isParticlesEngineInitialised.handleSetTrue);
    }, []);

    const value = useMemo(
        () => ({
            isParticlesEngineInitialised: isParticlesEngineInitialised.value,
        }),
        [isParticlesEngineInitialised.value],
    );

    return (
        <ParticlesContext.Provider value={value}>
            {children}
        </ParticlesContext.Provider>
    );
};
