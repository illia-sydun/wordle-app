import './App.scss';

import { GameViewAsync } from '../views/GameView';
import { Navbar } from '../components/Navbar/Navbar.tsx';
import { Snackbar } from '../components/Snackbar/Snackbar.tsx';
import { GameLostViewAsync } from '../views/GameLostView';
import { GameWonViewAsync } from '../views/GameWonView';
import { ParticlesContextProvider } from '@shared/contexts/Particles';

const App = () => {
    return (
        <ParticlesContextProvider>
            <main id='main'>
                <Snackbar />
                <Navbar />
                <GameViewAsync />
                <GameLostViewAsync />
                <GameWonViewAsync />
            </main>
        </ParticlesContextProvider>
    );
};

export default App;
