import { MdOutlineBugReport } from 'react-icons/md';
import { feedbackIntegration } from '@sentry/react';

import styles from './HelpButton.module.scss';
// @TODO added quickly, needs refactor

export const HelpButton = () => {
    if (!feedbackIntegration) {
        return null;
    }

    const handleHelpButtonClick = () => {
        feedbackIntegration({
            // Additional SDK configuration goes in here, for example:
            autoInject: false,
            colorScheme: 'dark',
            showEmail: false,
            isNameRequired: true,
            buttonLabel: 'Have a Suggestion?',
            submitButtonLabel: 'Submit',
            formTitle: 'How we can improve Wordle?',
            messagePlaceholder:
                'Let us know about your ideas or suggestions...',
            successMessageText: 'Thank you for your time! ',
        }).openDialog();
    };

    return (
        <div className={styles.container} onClick={handleHelpButtonClick}>
            <MdOutlineBugReport />
        </div>
    );
};
