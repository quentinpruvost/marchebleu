<script>
  import { faqPairs } from '$lib/content/faq.js';

  /** @type {{ site?: string; canonicalUrl?: string }} */
  export let data;

  $: site = data.site ?? '';

  const pageTitle = 'よくある質問（FAQ）| Marché Bleu';
  const pageDesc =
    '発送準備の目安、フランス発→日本への到着までの現実的な目安（保証しない範囲）、代替・返品など。';

  /** @param {string} s */
  function faqAnswerPlain(s) {
    return s.replace(/\*\*([^*]+)\*\*/g, '$1');
  }

  /** @param {string} s */
  function faqAnswerHtml(s) {
    return String(s).replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-stone-800">$1</strong>');
  }

  $: faqLdJson =
    site &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqPairs.map((row) => ({
        '@type': 'Question',
        name: row.questionJa,
        acceptedAnswer: { '@type': 'Answer', text: faqAnswerPlain(row.answerJa) }
      }))
    });
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDesc} />
  {#if site}
    <link rel="alternate" hreflang="ja" href={`${site}/faq`} />
    <link rel="alternate" hreflang="fr-FR" href={`${site}/fr/faq`} />
    <link rel="alternate" hreflang="x-default" href={`${site}/faq`} />
  {/if}
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDesc} />
  <meta property="og:type" content="website" />
  {#if faqLdJson}
    <svelte:element this={'script'} type="application/ld+json">{faqLdJson}</svelte:element>
  {/if}
</svelte:head>

<div class="mx-auto max-w-3xl py-14 pb-24 md:py-18">
  <p class="text-[11px] tracking-[0.35em] text-terre-cuite">FAQ</p>
  <h1 class="mt-3 font-serif text-3xl text-stone-800 md:text-4xl">よくある質問</h1>
  <p class="mt-6 text-sm leading-relaxed text-stone-600">
    <a href="/fr/faq" lang="fr" class="underline decoration-stone-300 underline-offset-4 hover:text-marche-bleu"
      >Version française →</a>
  </p>

  <dl class="mt-12 space-y-10 border-t border-stone-200 pt-12">
    {#each faqPairs as row}
      <div>
        <dt class="font-semibold text-stone-800">{row.questionJa}</dt>
        <dd class="mt-3 whitespace-pre-line text-sm leading-relaxed text-stone-600">{@html faqAnswerHtml(row.answerJa)}</dd>
      </div>
    {/each}
  </dl>

  <p class="mt-16 text-center text-[11px] text-stone-500">
    <a href="/" class="border-b border-stone-300 hover:border-marche-bleu hover:text-marche-bleu">トップへ戻る</a>
    <span class="mx-3 text-stone-300">｜</span>
    <a href="/guides" class="border-b border-stone-300 hover:border-marche-bleu hover:text-marche-bleu">産地ガイド</a>
  </p>
</div>
