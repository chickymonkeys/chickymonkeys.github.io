# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment

The site is deployed to GitHub Pages by the
[`Deploy to GitHub Pages`](.github/workflows/deploy.yml) workflow, which builds
with `NITRO_PRESET=github_pages` and publishes `.output/public`.

The Pages source is set to **GitHub Actions**, not "Deploy from a branch". The
workflow is the only publisher — there is no branch whose contents are served
directly, and the `CNAME` file in the repository root is inert (the custom
domain `pizzigolot.to` comes from the repository Pages settings).

Branch flow:

```
development  ──PR──▶  main  ──push triggers──▶  deploy workflow  ──▶  pizzigolot.to
```

- Work lands on `development`, then reaches `main` through a pull request.
- Only pushes to `main` trigger a deployment.
- To redeploy without a code change, re-run the workflow rather than committing
  to `main`:

  ```bash
  gh workflow run "Deploy to GitHub Pages" --ref main
  ```

> [!NOTE]
> This replaces the previous flow, where `development` was merged into `master`
> and GitHub Pages served that branch directly. `master` no longer exists and
> merging into it does nothing.
