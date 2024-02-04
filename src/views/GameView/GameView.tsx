import { Board } from '../../components/Board';
import { Keyboard } from '../../components/Keyboard';
import styles from './GameView.module.scss';

const GameView = () => {
    return (
        <section className={styles.container}>
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
