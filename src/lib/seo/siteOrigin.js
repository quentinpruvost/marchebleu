/** @param {any} publicEnv */
export function resolveSiteOrigin(publicEnv) {
	const v =
		publicEnv?.PUBLIC_SITE_URL?.trim()?.replace(/\/+$/, '');
	return v || 'https://marchebleu.jp';
}

/** Absolute URLsafe path for CDN-like static assets (handles spaces etc.) */
/**
 * @param {string} site
 * @param {string} path
 */
export function absoluteAsset(site, path) {
	if (!path.startsWith('/')) path = '/' + path;
	return `${site}${encodeURI(path)}`;
}
