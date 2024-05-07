import { STATIC_SECRET } from '$env/static/private';
import { PUBLIC_STATIC_VAR } from '$env/static/public';
import { env as secret } from '$env/dynamic/private';
import { env } from '$env/dynamic/public';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        static_secret: STATIC_SECRET,
        static_env_var: PUBLIC_STATIC_VAR,
        dynamic_secret: secret.SECRET,
        dynamic_env_var: env.PUBLIC_VAR
    };
};