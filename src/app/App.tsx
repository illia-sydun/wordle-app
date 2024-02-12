import './App.scss';

import { GameViewAsync } from '../views/GameView';
import { GameStoreProvider } from '@shared/stores/GameStore';
import { Navbar } from '../components/Navbar/Navbar.tsx';

const App = () => {
    return (
        <main id='main'>
            <Navbar />
            <GameStoreProvider>
                <GameViewAsync />
            </GameStoreProvider>
        </main>
    );
};

export default App;
