<script>
  import { guides } from '$lib/content/guides.js';

  /** @type {{ site?: string; canonicalUrl?: string }} */
  export let data;

  $: site = data.site ?? '';

  const pageTitle = 'Guides terroirs & histoires françaises | Marché Bleu';
  const pageDesc =
    'Nougat de Montélimar, Provence, calisson : contexte régional pour comprendre ce que vous retrouvez dans nos coffrets vers le Japon.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDesc} />
  {#if site}
    <link rel="alternate" hreflang="ja" href={`${site}/guides`} />
    <link rel="alternate" hreflang="fr-FR" href={`${site}/fr/guides`} />
    <link rel="alternate" hreflang="x-default" href={`${site}/guides`} />
  {/if}
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDesc} />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto max-w-3xl py-14 pb-24 md:py-18">
  <p class="text-[11px] tracking-[0.35em] text-terre-cuite">GUIDES</p>
  <h1 class="mt-3 font-serif text-3xl text-stone-800 md:text-4xl">Guides &amp; lectures</h1>
  <p class="mt-6 text-sm leading-relaxed text-stone-600">
    Histoires régionales et usages du terroir : un complément sérieux aux fiches produit.
    <a href="/guides" lang="ja" class="ml-1 underline decoration-stone-300 underline-offset-4 hover:text-marche-bleu"
      >Voir en japonais →</a>
  </p>

  <ul class="mt-12 divide-y divide-stone-200 border-t border-stone-200">
    {#each guides as g}
      <li class="py-10">
        <p class="text-[10px] tracking-widest text-stone-400">{g.datePublished}</p>
        <h2 class="mt-2 font-serif text-xl text-stone-800 md:text-2xl">
          <a href={`/fr/guides/${g.slug}`} class="hover:text-marche-bleu">{g.titleFr}</a>
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-stone-600">{g.descFr}</p>
        <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
          <a href={`/fr/guides/${g.slug}`} lang="fr" class="font-semibold tracking-wide text-marche-bleu">
            Lire · français
          </a>
          <a href={`/guides/${g.slug}`} lang="ja" class="tracking-wide text-stone-500 hover:text-marche-bleu">
            読む · 日本語
          </a>
        </div>
      </li>
    {/each}
  </ul>
</div>
