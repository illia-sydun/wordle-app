import { Board } from '../../components/Board';
import { Keyboard } from '../../components/Keyboard';
import styles from './GameView.module.scss';
import { useGameView } from './useGameView.ts';

const GameView = () => {
    useGameView();

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Wordle</h2>
            <div className={styles.board}>
                <Board />
            </div>
            <div className={styles.keyboard}>
                <Keyboard />
            </div>
        </section>
    );
};

export default GameView;
