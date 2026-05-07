# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Vercel + Stripe

Variables d’environnement Vercel (puis **Redeploy**) :

- **`STRIPE_SECRET_KEY`** : clé secrète Stripe.
- **`PUBLIC_SITE_URL`** : ex. `https://marchebleu.jp` sans slash final — utile si l’API checkout ne reçoit pas d’en-tête `Origin` (URLs `success_url` / `cancel_url` valides pour Stripe).

## SEO (résumé technique)

- **Canonical + Open Graph** : calculés dans `src/routes/+layout.js` à partir de `PUBLIC_SITE_URL` (fallback `https://marchebleu.jp`).
- **Sitemap dynamique** : `GET /sitemap.xml` (URL + images produits). **Robots** : `GET /robots.txt` référence ce sitemap et exclut `/api/`.
- **Données structurées** : `Organization` + `WebSite` + `ItemList` (accueil) ; `Product` + `BreadcrumbList` (fiches).
- **Post-paiement** : `/success` est en **`noindex`** (évite le bruit index / contenu dupliqué).

Après mise en prod : [Google Search Console](https://search.google.com/search-console) → propriété domaine → soumettre le sitemap `https://ton-domaine/sitemap.xml`.
