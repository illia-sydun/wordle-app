import { useContext, useEffect } from 'react';
import { ParticlesContext } from '@shared/contexts/Particles';

export const useParticles = () => {
    const particles = useContext(ParticlesContext);

    useEffect(() => {
        if (!particles) {
            throw Error('Particles context was not found in a parent tree.');
        }
    }, []);

    return {
        ...particles,
    };
};
