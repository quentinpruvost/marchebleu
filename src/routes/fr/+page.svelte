<script>
  /** @type {{ site?: string; canonicalUrl?: string }} */
  export let data;

  $: site = data.site ?? '';

  const pageTitle =
    'Marché Bleu | Coffrets gourmands français expédiés depuis Montélimar vers le Japon';
  const pageDesc =
    'Sélection artisanale depuis le Sud de la France : nougat et confiserie de proximité, commande après paiement, envoi suivant vers une adresse au Japon.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDesc} />
  {#if site}
    <link rel="alternate" hreflang="ja" href={site} />
    <link rel="alternate" hreflang="fr-FR" href={`${site}/fr`} />
    <link rel="alternate" hreflang="x-default" href={site} />
  {/if}
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDesc} />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto max-w-3xl py-16 pb-24 text-center md:py-20">
  <p class="text-[11px] tracking-[0.45em] text-terre-cuite font-medium">MARCHÉ BLEU</p>
  <h1 class="mt-4 font-serif text-3xl leading-tight text-stone-800 md:text-[2.65rem]">
    Du terroir que nous habitons&nbsp;<br class="hidden sm:inline" />vers votre table au Japon
  </h1>
  <p class="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
    Boutique en ligne japonaise (interface principale JPN). Ici nous vous donnons une porte SEO en français :
    références locales, FAQ bilingues et guides régionaux. La vente passe par Stripe (adresses japonaises
    uniquement pour l’instant).
  </p>
  <div class="mt-10 flex flex-wrap justify-center gap-4">
    <a
      href="/"
      lang="ja"
      class="bg-marche-bleu px-7 py-3.5 text-[11px] font-bold tracking-[0.28em] text-white shadow-md transition hover:bg-[#0A274F]"
    >
      Boutique (日本語)
    </a>
    <a
      href="/fr/guides"
      class="border border-stone-300 bg-white px-7 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-stone-700 transition hover:border-marche-bleu hover:text-marche-bleu"
    >
      Nos guides FR
    </a>
    <a
      href="/fr/faq"
      class="border border-stone-300 bg-white px-7 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-stone-700 transition hover:border-marche-bleu hover:text-marche-bleu"
    >
      FAQ
    </a>
  </div>
</div>
