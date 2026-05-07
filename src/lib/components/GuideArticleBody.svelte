<script>
  /** @type {any} */
  export let guide;

  /** @type {'ja' | 'fr'} */
  export let locale;
</script>

<article class="mx-auto max-w-3xl py-14 pb-24 md:py-18">
  <p class="text-[11px] tracking-[0.35em] text-terre-cuite">GUIDE</p>
  <h1 class="mt-3 font-serif text-3xl leading-tight text-stone-800 md:text-4xl">
    {locale === 'ja' ? guide.titleJa : guide.titleFr}
  </h1>
  <p class="mt-2 text-[10px] uppercase tracking-widest text-stone-400">{guide.datePublished}</p>

  <div class="mt-10 space-y-6 text-sm leading-[1.95] text-stone-700 md:text-base">
    {#each locale === 'ja' ? guide.paragraphsJa : guide.paragraphsFr as p}
      <p>{p}</p>
    {/each}
  </div>

  {#if locale === 'ja'}
    <p class="mt-14 text-center text-[11px] text-stone-500">
      <a href="/guides" class="border-b border-stone-300 hover:border-marche-bleu hover:text-marche-bleu">ガイド一覧へ</a>
      <span class="mx-3 text-stone-300">｜</span>
      <a href="/fr/guides/{guide.slug}" lang="fr" class="border-b border-stone-300 hover:border-marche-bleu hover:text-marche-bleu"
        >Lire cette page en français</a>
    </p>
  {:else}
    <p class="mt-14 text-center text-[11px] text-stone-500">
      <a href="/fr/guides" class="border-b border-stone-300 hover:border-marche-bleu hover:text-marche-bleu"
        >Tous les guides FR</a>
      <span class="mx-3 text-stone-300">｜</span>
      <a href="/guides/{guide.slug}" lang="ja" class="border-b border-stone-300 hover:border-marche-bleu hover:text-marche-bleu"
        >日本語版を読む</a>
    </p>
  {/if}
</article>
