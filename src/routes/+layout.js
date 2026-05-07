import { env as publicEnv } from '$env/dynamic/public';
import { resolveSiteOrigin } from '$lib/seo/siteOrigin.js';

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
	const site = resolveSiteOrigin(publicEnv);
	const path = url.pathname;
	const canonicalUrl = `${site}${path === '/' ? '' : path}`;

	return {
		site,
		canonicalUrl
	};
}
