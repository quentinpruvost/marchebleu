import { resolveSiteOrigin } from '$lib/seo/siteOrigin.js';
import { env as publicEnv } from '$env/dynamic/public';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const site = resolveSiteOrigin(publicEnv);
	const body =
		`User-agent: *
Allow: /

Disallow: /api/

Sitemap: ${site}/sitemap.xml
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=86400'
		}
	});
}
