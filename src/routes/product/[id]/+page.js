import { error } from '@sveltejs/kit';
import { packs } from '$lib/data/packs.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const pack = packs.find((p) => p.id === params.id);
	if (!pack) {
		error(404, 'Not Found');
	}
	return { pack };
}
