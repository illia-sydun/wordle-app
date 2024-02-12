import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <header className={styles.container}>
            <h2 className={styles.title}>Wordle</h2>
        </header>
    );
};
