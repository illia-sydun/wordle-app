import styles from './Navbar.module.scss';
import { HintButton } from './components/HintButton/HintButton.tsx';
import { HelpButton } from './components/HelpButton/HelpButton.tsx';
import { RestartButton } from './components/RestartButton/RestartButton.tsx';
// @TODO added quickly, needs refactor

export const Navbar = () => {
    return (
        <header className={styles.container}>
            <RestartButton />
            <h2 className={styles.title}>Wordle</h2>
            <HelpButton />
            <HintButton />
        </header>
    );
};
