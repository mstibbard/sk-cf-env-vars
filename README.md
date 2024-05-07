# SvelteKit Cloudflare environment variables

## The issue

Local development requires environment variables **and** secrets to exist in `.env`

A successful deployment requires:

- environment variables to exist in [wrangler.toml](./wrangler.toml) under the `[vars]` section
- secrets to be created and encrypted in the Project dashboard

As a result the developer needs to maintain parity between the `.env` environment variables and the `wrangler.toml` environment variables

Note: The environment variables under `[vars]` are currently exposed and accessible to SvelteKit if you access them as a binding (E.g., `platform.env.NAME`). Using this is plausible however it means both secrets and environment variables are only accessible via `server` routes and need to be passed around via `load` functions if required client-side.

## Suggested solution

Surface the `wrangler.toml [vars]` items as environment variables locally so they are accessible via [the standard SvelteKit approach](https://kit.svelte.dev/docs/modules#$env-dynamic-private):

```js
import { PUBLIC_STATIC_VAR } from '$env/static/public';
import { env } from '$env/dynamic/public';

let dynamic = env.PUBLIC_VAR
```

## Example / reproduction

1. Clone the repository
2. Install dependencies

```
pnpm install
```

3. Copy/rename `.env.example` to `.env`
4. Run the development server and load the index page

```
pnpm run dev --open
```