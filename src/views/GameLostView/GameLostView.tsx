import styles from './GameLostView.module.scss';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import { observer } from 'mobx-react-lite';
import { Typewriter } from 'react-simple-typewriter';
import { PARTICLES_PRESET } from '@shared/constants/ParticlesPreset.ts';
import { Particles } from '../../components/Particles';
import { useBooleanState } from '@shared/hooks/useBooleanState.ts';
import { Container } from '@tsparticles/engine';
import { vibrationService } from '../../services/vibration';

const GameLostView = observer(() => {
    const {
        isGameLost,
        wordStore: { word },
        boardStore: { lastRow },
    } = useMobxStore();

    const particlesLoaded = useBooleanState();

    if (!isGameLost) {
        return null;
    }

    const words = [
        `Sorry. It wasn\`t ${lastRow.value.toUpperCase()}`,
        'The word of the day was...',
        word.toUpperCase(),
    ];

    const handleParticlesLoaded = (
        container: Container | undefined,
    ): Promise<void> => {
        return new Promise(() => {
            particlesLoaded.handleSetValue(!!container?.started);
        });
    };

    const handleOnType = () => {
        vibrationService.vibrate('typing');
    };

    const handleOnDelete = () => {
        vibrationService.vibrate('deleting');
    };

    return (
        <section className={styles.container}>
            <div className={styles.text}>
                {particlesLoaded.value && (
                    <Typewriter
                        words={words}
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={500}
                        onType={handleOnType}
                        onDelete={handleOnDelete}
                    />
                )}
            </div>
            <div className={styles.container}>
                <Particles
                    options={PARTICLES_PRESET.GAME_LOST}
                    particlesLoaded={handleParticlesLoaded}
                />
            </div>
        </section>
    );
});

export default GameLostView;
