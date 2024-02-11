import './App.scss';

import { GameViewAsync } from '../views/GameView';
import { GameStoreProvider } from '@shared/stores/GameStore';

const App = () => {
    return (
        <main id='main'>
            <GameStoreProvider>
                <GameViewAsync />
            </GameStoreProvider>
        </main>
    );
};

export default App;
