import styles from './GameWonView.module.scss';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import { observer } from 'mobx-react-lite';
import { PARTICLES_PRESET } from '@shared/constants/ParticlesPreset.ts';
import { Particles } from '../../components/Particles';

const GameWonView = observer(() => {
    const { isGameWon } = useMobxStore();

    if (!isGameWon) {
        return null;
    }

    return (
        <section className={styles.container}>
            <Particles options={PARTICLES_PRESET.GAME_WON} />
        </section>
    );
});

export default GameWonView;
