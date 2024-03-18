import TSParticles, { IParticlesProps } from '@tsparticles/react';
import { useParticles } from './useParticles.ts';

export const Particles = (props: IParticlesProps) => {
    useParticles();

    return <TSParticles {...props} />;
};
