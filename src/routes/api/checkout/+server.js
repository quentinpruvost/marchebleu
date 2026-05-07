import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { packs } from '$lib/data/packs.js';

const stripe = new Stripe(STRIPE_SECRET_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
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
            success_url: `${request.headers.get('origin')}/success`,
            cancel_url: `${request.headers.get('origin')}/product/${packId}`,
            shipping_address_collection: {
                allowed_countries: ['JP'],
            },
        });

        return json({ url: session.url });
    } catch (/** @type {any} */ err) {
        return json({ error: err.message }, { status: 500 });
    }
}