import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.wordle',
    appName: 'wordle',
    webDir: 'dist',
    server: {
        androidScheme: 'https',
    },
};

export default config;
