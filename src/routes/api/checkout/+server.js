import Stripe from 'stripe';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { json } from '@sveltejs/kit';
import { packs } from '$lib/data/packs.js';

/** @type {InstanceType<typeof Stripe> | undefined} */
let stripe;

/** @param {Request} request */
function resolveSiteUrl(request) {
    const fromPublic = publicEnv.PUBLIC_SITE_URL?.trim()?.replace(/\/$/, '');
    if (fromPublic) return fromPublic;

    const origin = request.headers.get('origin')?.trim()?.replace(/\/$/, '');
    if (origin) return origin;

    const host = request.headers.get('host')?.trim();
    const proto = request.headers.get('x-forwarded-proto') || 'https';
    if (host) return `${proto}://${host}`;

    const vercelUrl = privateEnv.VERCEL_URL?.trim()?.replace(/\/$/, '');
    if (vercelUrl) return `https://${vercelUrl}`;

    return '';
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const secret = privateEnv.STRIPE_SECRET_KEY?.trim();
    if (!secret) {
        return json({ error: 'Configuration Stripe manquante.' }, { status: 500 });
    }

    if (!stripe) {
        stripe = new Stripe(secret);
    }

    const siteUrl = resolveSiteUrl(request);
    if (!siteUrl) {
        return json({ error: 'Impossible de déterminer l’URL du site (origin / host).' }, { status: 500 });
    }

    const { packId } = await request.json();
    const pack = packs.find((item) => item.id === packId);

    if (!pack || pack.status !== 'available') {
        return json({ error: 'Pack indisponible.' }, { status: 400 });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'jpy',
                        product_data: {
                            name: pack.name,
                            description: `Expédié de Montélimar par Quentin & Lydia`,
                        },
                        unit_amount: pack.price,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${siteUrl}/success`,
            cancel_url: `${siteUrl}/product/${packId}`,
            shipping_address_collection: {
                allowed_countries: ['JP'],
            },
        });

        return json({ url: session.url });
    } catch (/** @type {any} */ err) {
        return json({ error: err.message }, { status: 500 });
    }
}