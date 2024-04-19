import styles from './GameLostView.module.scss';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import { observer } from 'mobx-react-lite';
import { Typewriter } from 'react-simple-typewriter';
import { PARTICLES_PRESET } from '@shared/constants/ParticlesPreset.ts';
import { Particles } from '../../components/Particles';
import { useBooleanState } from '@shared/hooks/useBooleanState.ts';
import { Container } from '@tsparticles/engine';
import { vibrationService } from '../../services/vibration';
import { getRandomElementFromArray } from '@shared/helpers/getRandomElementFromArray.ts';

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

    // @TODO added quickly

    const words = getRandomElementFromArray([
        [
            `Oops! That's not quite it.`,
            `The correct word was...`,
            word.toUpperCase(),
        ],
        [
            `Sorry. It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Hm, pardon me.`,
            'It was...',
            word.toUpperCase(),
        ],
        [
            `Close, but no cigar.`,
            `The word you were looking for is...`,
            word.toUpperCase(),
        ],
        [
            `Apologies. It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Well, that's awkward.`,
            'I meant...',
            word.toUpperCase(),
        ],
        [
            `Not quite there, keep trying!`,
            `The correct word is...`,
            word.toUpperCase(),
        ],
        [
            `Regrettably. It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Oh dear, my mistake.`,
            'It was...',
            word.toUpperCase(),
        ],
        [
            `Oh dear! Try again!`,
            `The word you missed is...`,
            word.toUpperCase(),
        ],
        [
            `Oops! It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Whoopsie! My bad.`,
            'It was...',
            word.toUpperCase(),
        ],
        [
            `Nearly! Better luck next time.`,
            `The word you overlooked is...`,
            word.toUpperCase(),
        ],
        [
            `Oh no! It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Yikes! My error.`,
            'It was...',
            word.toUpperCase(),
        ],
        [
            `Not quite right. Keep guessing!`,
            `The correct word was...`,
            word.toUpperCase(),
        ],
        [
            `Alas! It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Uh-oh! My apologies.`,
            'It was...',
            word.toUpperCase(),
        ],
        [
            `Oops! Try another guess!`,
            `The missed word was...`,
            word.toUpperCase(),
        ],
        [
            `My apologies. It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Oops-a-daisy! My mistake.`,
            'It is...',
            word.toUpperCase(),
        ],
        [
            `So close! Keep guessing!`,
            `The word you missed is...`,
            word.toUpperCase(),
        ],
        [
            `Not quite, but don't give up!`,
            `The word you missed was...`,
            word.toUpperCase(),
        ],
        [
            `Darn! It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Bummer! My fault.`,
            'It was...',
            word.toUpperCase(),
        ],
        [
            `Nice try! Keep going!`,
            `The correct word was...`,
            word.toUpperCase(),
        ],
        [
            `Drat! It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Oh shoot! My bad.`,
            'It was...',
            word.toUpperCase(),
        ],
        [
            `Oopsie! It wasn't ${lastRow.value.toUpperCase()}.`,
            'The word was...',
            lastRow.value.toUpperCase(),
            `Whoops! My mistake.`,
            'It is...',
            word.toUpperCase(),
        ],
    ]);

    const handleParticlesLoaded = (
        container: Container | undefined,
    ): Promise<void> => {
        return new Promise(() => {
            particlesLoaded.handleSetValue(!!container?.started);
        });
    };
    // @TODO added quickly
    const handleOnType = () => {
        vibrationService.vibrate('typing');
    };

    // @TODO added quickly
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
