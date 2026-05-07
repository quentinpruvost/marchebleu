import { packs } from '$lib/data/packs.js';
import { guides } from '$lib/content/guides.js';
import { resolveSiteOrigin, absoluteAsset } from '$lib/seo/siteOrigin.js';
import { env as publicEnv } from '$env/dynamic/public';

/** @param {string} text */
function xmlEscape(text) {
	return String(text)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const site = resolveSiteOrigin(publicEnv);
	const now = new Date().toISOString().slice(0, 10);

	const staticPages = [
		{ loc: '/', changefreq: 'weekly', priority: '1.0' },
		{ loc: '/guides', changefreq: 'weekly', priority: '0.75' },
		{ loc: '/faq', changefreq: 'monthly', priority: '0.65' },
		{ loc: '/fr', changefreq: 'weekly', priority: '0.55' },
		{ loc: '/fr/guides', changefreq: 'weekly', priority: '0.55' },
		{ loc: '/fr/faq', changefreq: 'monthly', priority: '0.5' },
		{ loc: '/legal/tokushoho', changefreq: 'yearly', priority: '0.35' },
		{ loc: '/legal/privacy', changefreq: 'yearly', priority: '0.35' }
	];

	let xml =
		'<?xml version="1.0" encoding="UTF-8"?>\n' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

	for (const row of staticPages) {
		const absolute = `${site}${row.loc}`;
		xml += `\t<url>\n`;
		xml += `\t\t<loc>${xmlEscape(absolute)}</loc>\n`;
		xml += `\t\t<lastmod>${now}</lastmod>\n`;
		xml += `\t\t<changefreq>${row.changefreq}</changefreq>\n`;
		xml += `\t\t<priority>${row.priority}</priority>\n`;
		xml += `\t</url>\n`;
	}

	for (const g of guides) {
		const locJa = `/guides/${g.slug}`;
		const locFr = `/fr/guides/${g.slug}`;
		for (const loc of [locJa, locFr]) {
			const absolute = `${site}${loc}`;
			xml += `\t<url>\n`;
			xml += `\t\t<loc>${xmlEscape(absolute)}</loc>\n`;
			xml += `\t\t<lastmod>${now}</lastmod>\n`;
			xml += `\t\t<changefreq>monthly</changefreq>\n`;
			xml += `\t\t<priority>0.72</priority>\n`;
			xml += `\t</url>\n`;
		}
	}

	for (const pack of packs) {
		const loc = `/product/${pack.id}`;
		const absolute = `${site}${loc}`;
		const priority = pack.status === 'available' ? '0.92' : '0.72';
		xml += `\t<url>\n`;
		xml += `\t\t<loc>${xmlEscape(absolute)}</loc>\n`;
		xml += `\t\t<lastmod>${now}</lastmod>\n`;
		xml += `\t\t<changefreq>monthly</changefreq>\n`;
		xml += `\t\t<priority>${priority}</priority>\n`;

		if (pack.image) {
			const imgUrl = absoluteAsset(site, pack.image);
			const cap = pack.description ? pack.description.slice(0, 280) : pack.name;
			xml += `\t\t<image:image>\n`;
			xml += `\t\t\t<image:loc>${xmlEscape(imgUrl)}</image:loc>\n`;
			xml += `\t\t\t<image:title>${xmlEscape(pack.name)}</image:title>\n`;
			xml += `\t\t\t<image:caption>${xmlEscape(cap)}</image:caption>\n`;
			xml += `\t\t</image:image>\n`;
		}

		xml += `\t</url>\n`;
	}

	xml += '</urlset>';

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
