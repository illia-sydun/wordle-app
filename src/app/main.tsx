import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // @TODO weird double render brakes the code
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
