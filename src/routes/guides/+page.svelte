<script>
  import { guides } from '$lib/content/guides.js';

  /** @type {{ site?: string; canonicalUrl?: string }} */
  export let data;

  $: site = data.site ?? '';

  const pageTitle =
    'ガイド・読み物 — フランス産地ストーリー | Marché Bleu';
  const pageDesc =
    'モンテリマールやプロヴァンスの産地、菓子の背景をゆっくり読むコーナー。日本への直送ギフトボックスMarché Bleuが丁寧にまとめた記事です。';
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
  <h1 class="mt-3 font-serif text-3xl text-stone-800 md:text-4xl">フランス産地ガイド</h1>
  <p class="mt-6 text-sm leading-relaxed text-stone-600">
    地方のひとつの味が、歴史や暮らしのなかでどう育ってきたか。私たちが街で体感してきたことを、コンテンツにして残していきます。
    <a href="/fr/guides" lang="fr" class="ml-1 underline decoration-stone-300 underline-offset-4 hover:text-marche-bleu"
      >Voir en français →</a>
  </p>

  <ul class="mt-12 divide-y divide-stone-200 border-t border-stone-200">
    {#each guides as g}
      <li class="py-10">
        <p class="text-[10px] tracking-widest text-stone-400">{g.datePublished}</p>
        <h2 class="mt-2 font-serif text-xl text-stone-800 md:text-2xl">
          <a href="/guides/{g.slug}" class="hover:text-marche-bleu">{g.titleJa}</a>
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-stone-600">{g.descJa}</p>
        <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
          <a href="/guides/{g.slug}" class="font-semibold tracking-wide text-marche-bleu">読む · 日本語</a>
          <a href={`/fr/guides/${g.slug}`} lang="fr" class="tracking-wide text-stone-500 hover:text-marche-bleu">
            Lire · français
          </a>
        </div>
      </li>
    {/each}
  </ul>
</div>
