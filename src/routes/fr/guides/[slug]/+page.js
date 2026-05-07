import { error } from '@sveltejs/kit';
import { getGuide } from '$lib/content/guides.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const guide = getGuide(params.slug);
	if (!guide) error(404, 'Guide introuvable');
	return { guide, locale: 'fr' };
}
