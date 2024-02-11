import { useState } from 'react';

export const useBooleanState = (defaultValue: boolean = false) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const handleSetValue = (value: boolean) => {
        setValue(Boolean(value));
    };

    const handleSetTrue = () => {
        setValue(true);
    };

    const handleSetFalse = () => {
        setValue(false);
    };

    const handleToggle = () => {
        setValue((boolean) => !boolean);
    };

    return {
        value,
        handleSetValue,
        handleSetTrue,
        handleSetFalse,
        handleToggle,
    };
};
