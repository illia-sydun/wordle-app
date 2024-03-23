import z from 'zod';

const zodEnv = z.object({
    VITE_APP_NAME: z.string(),
});

const envData = zodEnv.safeParse(import.meta.env);

if (!envData.success) {
    const errorMessage =
        'There is an error with the server environment variables: ' +
        JSON.stringify(envData.error.issues);

    throw new Error(errorMessage);
}
