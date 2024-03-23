import * as Sentry from '@sentry/react';

// @TODO rewrite it a bit
class LoggingService {
    private captureMessage(
        ...props: Parameters<typeof Sentry.captureMessage>
    ): ReturnType<typeof Sentry.captureMessage> {
        return Sentry.captureMessage(...props);
    }

    public log(
        message: Parameters<typeof this.captureMessage>[0],
    ): ReturnType<typeof this.captureMessage> {
        console.log('log: ', message);
        return this.captureMessage(message, 'log');
    }

    public info(
        message: Parameters<typeof this.captureMessage>[0],
    ): ReturnType<typeof this.captureMessage> {
        console.log('info: ', message);
        return this.captureMessage(message, 'info');
    }

    public error(
        message: Parameters<typeof this.captureMessage>[0],
    ): ReturnType<typeof this.captureMessage> {
        console.log('error: ', message);
        return this.captureMessage(message, 'error');
    }
}

export const loggingService = new LoggingService();
