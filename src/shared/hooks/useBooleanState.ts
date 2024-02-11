import { useCallback, useState } from 'react';

export const useBooleanState = (defaultValue: boolean = false) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const handleSetValue = useCallback((value: boolean) => {
        setValue(Boolean(value));
    }, []);

    const handleSetTrue = useCallback(() => {
        setValue(true);
    }, []);

    const handleSetFalse = useCallback(() => {
        setValue(false);
    }, []);

    const handleToggle = useCallback(() => {
        setValue((boolean) => !boolean);
    }, []);

    return {
        value,
        handleSetValue,
        handleSetTrue,
        handleSetFalse,
        handleToggle,
    };
};
