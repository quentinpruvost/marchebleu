<script>
  import { dev } from '$app/environment';
  import Reveal from '$lib/ui/Reveal.svelte';
  import { absoluteAsset } from '$lib/seo/siteOrigin.js';
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  /** @type {{ pack: any; site?: string; canonicalUrl?: string }} */
  export let data;

  $: ({ pack } = data);
  $: site = data.site ?? '';
  $: canonicalUrl = data.canonicalUrl ?? '';
  $: formattedPrice = new Intl.NumberFormat('ja-JP').format(pack.price);
  $: pageTitle = `${pack.name} | Marché Bleu — フランス美食ボックス直送`;
  $: metaDescription = (pack.description || pack.story || '').slice(0, 158);
  $: ogImage = site && pack.image ? absoluteAsset(site, pack.image) : '';
  $: productUrl = site ? `${site}/product/${pack.id}` : '';

  $: productLdJson =
    site &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: pack.name,
      description: pack.description,
      image: (pack.gallery || [pack.image])
        .filter(Boolean)
        .map((/** @type {string} */ path) => absoluteAsset(site, path)),
      sku: pack.id,
      brand: { '@type': 'Brand', name: pack.brand || 'Marché Bleu' },
      offers: {
        '@type': 'Offer',
        url: productUrl,
        priceCurrency: 'JPY',
        price: pack.price,
        availability:
          pack.status === 'available'
            ? 'https://schema.org/InStock'
            : 'https://schema.org/PreOrder',
        seller: { '@type': 'Organization', name: 'Marché Bleu', url: site }
      }
    });

  $: breadcrumbLdJson =
    site &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: site },
        { '@type': 'ListItem', position: 2, name: 'コレクション', item: `${site}/#collections` },
        {
          '@type': 'ListItem',
          position: 3,
          name: pack.name,
          item: productUrl
        }
      ]
    });

  let selectedImage = '';
  let loadedPackId = '';

  $: if (pack && pack.id !== loadedPackId) {
    loadedPackId = pack.id;
    selectedImage = pack.gallery?.[0] || pack.image;
  }

  async function handleCheckout() {
    if (!pack || pack.status !== 'available') return;
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packId: pack.id
        })
      });
      const checkoutData = await response.json();
      if (checkoutData.url) {
        window.location.href = checkoutData.url;
      } else {
        console.error('[checkout]', response.status, checkoutData);
        if (dev && checkoutData?.error) {
          alert(`決済エラー（開発用）: ${checkoutData.error}`);
        } else {
          alert('只今、決済を一時的に承れません。しばらく経ってからお試しください。');
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metaDescription} />
  {#if canonicalUrl}
    <meta property="og:url" content={canonicalUrl} />
  {/if}
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:type" content="product" />
  {#if ogImage}
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:alt" content={`${pack.name} — Marché Bleu ギフトボックス`} />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={metaDescription} />
  {#if ogImage}
    <meta name="twitter:image" content={ogImage} />
  {/if}

  {#if productLdJson}
    <svelte:element this={'script'} type="application/ld+json">{productLdJson}</svelte:element>
  {/if}
  {#if breadcrumbLdJson}
    <svelte:element this={'script'} type="application/ld+json">{breadcrumbLdJson}</svelte:element>
  {/if}
</svelte:head>

<article class="py-10 md:py-16">
  <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
    <Reveal as="div" extraClass="space-y-4 lg:sticky lg:top-28">
      <div class="relative aspect-[4/5] overflow-hidden bg-stone-200 shadow-xl">
        {#key selectedImage}
          <img
            src={selectedImage}
            alt={pack.name}
            class="absolute inset-0 h-full w-full object-cover"
            fetchpriority="high"
            in:fade={{ duration: 420, easing: cubicOut }}
            out:fade={{ duration: 260, easing: cubicOut }}
          />
        {/key}
      </div>
      <div class="grid grid-cols-4 gap-3">
        {#each (pack.gallery || [pack.image]).slice(0, 8) as image, i}
          <button
            type="button"
            class="aspect-square overflow-hidden border transition-all duration-500 {selectedImage === image
              ? 'border-marche-bleu shadow-[0_12px_28px_-16px_rgba(0,51,102,0.45)] ring-1 ring-marche-bleu/20'
              : 'border-stone-200 hover:border-stone-400'}"
            style="transition-delay: {i * 25}ms"
            on:click={() => (selectedImage = image)}
            aria-label={`${pack.name}の写真 ${i + 1}`}
          >
            <img src={image} alt="" class="h-full w-full object-cover" loading="lazy" />
          </button>
        {/each}
      </div>
    </Reveal>

    <Reveal as="div" extraClass="flex flex-col" delay={60}>
      <nav class="mb-6 text-[10px] uppercase tracking-[0.28em] text-stone-400" aria-label="パンくず">
        <a href="/" class="transition-colors duration-300 hover:text-marche-bleu">ホーム</a>
        <span class="mx-2 text-stone-300">/</span>
        <span class="text-stone-500">{pack.tags[0]}</span>
      </nav>

      <h1 class="font-serif text-3xl leading-tight text-stone-800 md:text-4xl">
        {pack.name}
      </h1>

      <p class="mt-4 max-w-prose text-[12px] leading-relaxed text-stone-500">
        箱を開けた瞬間から始まる、南仏の余韻。贈る方にも、ご自分へのご褒美にも。
      </p>

      <div class="mt-6 flex items-baseline gap-4 border-b border-stone-200 pb-6">
        <p class="font-light text-3xl text-marche-bleu">¥{formattedPrice}</p>
        <span
          class="rounded border border-stone-200/80 bg-stone-50 px-2 py-1 text-[10px] text-stone-600"
          >税込 · 国際送料込み</span>
      </div>

      <div class="mt-8 space-y-8">
        <div
          class="border-l-2 border-terre-cuite bg-white p-6 text-[13px] italic leading-[1.9] text-stone-600 shadow-sm"
        >
          <p>「{pack.story}」</p>
          <p class="mt-4 text-right font-serif text-[12px] not-italic text-stone-400">— Lydia, Montélimar</p>
        </div>

        <p class="text-sm leading-[1.85] text-stone-600">
          {pack.description}
        </p>

        <div class="rounded border border-stone-200 bg-stone-50/70 p-5">
          <h2 class="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-stone-800">
            <span aria-hidden="true">◇</span>
            製品仕様
          </h2>
          <div class="grid grid-cols-1 gap-3 text-xs">
            <div class="flex justify-between border-b border-stone-100 pb-2">
              <span class="text-stone-400">ブランド</span>
              <span class="font-medium text-stone-700">{pack.brand || 'Marché Bleu'}</span>
            </div>
            <div class="flex justify-between border-b border-stone-100 pb-2">
              <span class="text-stone-400">原産国</span>
              <span class="font-medium text-stone-700">{pack.origin || 'France'}</span>
            </div>
            <div class="flex justify-between border-b border-stone-100 pb-2">
              <span class="text-stone-400">内容量の目安</span>
              <span class="font-medium text-stone-700">{pack.weight} kg</span>
            </div>
            <div class="flex justify-between border-b border-stone-100 pb-2">
              <span class="text-stone-400">保存・配送</span>
              <span class="font-medium text-stone-700">{pack.shipping || '常温'}</span>
            </div>
            <div class="flex justify-between pb-1">
              <span class="text-stone-400">発送地</span>
              <span class="font-medium text-stone-700">Montélimar, Drôme</span>
            </div>
          </div>
        </div>

        <div class="pt-2">
          <h2 class="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]">ボックスの内容</h2>
          <ul class="space-y-3">
            {#each pack.content as item}
              <li class="flex items-start text-sm text-stone-600">
                <span class="mr-3 mt-2 h-px w-6 shrink-0 bg-marche-bleu/35"></span>
                <span class="leading-relaxed">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="rounded border border-stone-100 bg-stone-50 p-6">
          <h2 class="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-400">
            特定原材料（アレルギー）
          </h2>
          <div class="grid grid-cols-2 gap-y-3 text-[11px] text-stone-600">
            <div class="flex justify-between border-b border-stone-200 pb-1 pr-4">
              <span>卵</span> <span class="font-semibold">含有</span>
            </div>
            <div class="flex justify-between border-b border-stone-200 pb-1 pl-4">
              <span>乳</span> <span class="font-semibold">含有</span>
            </div>
            <div class="flex justify-between border-b border-stone-200 pb-1 pr-4">
              <span>小麦</span> <span class="font-semibold">含有</span>
            </div>
            <div class="flex justify-between border-b border-stone-200 pb-1 pl-4">
              <span>ナッツ類</span> <span class="font-semibold text-terre-cuite">微量の可能性</span>
            </div>
          </div>
        </div>

        <div class="space-y-2 text-xs">
          <div class="flex justify-between border-b border-stone-100 pb-2">
            <span class="text-stone-400">梱包総重量（目安）</span>
            <span class="font-medium text-stone-700">約 {pack.weight} kg</span>
          </div>
          <div class="flex justify-between border-b border-stone-100 pb-2">
            <span class="text-stone-400">アイテム数</span>
            <span class="font-medium text-stone-700">{pack.content.length} 点</span>
          </div>
        </div>

        <div class="border border-blue-100/80 bg-blue-50/50 p-4 text-[11px] leading-relaxed text-blue-950">
          <strong class="font-semibold">お届け設計：</strong>
          国際送料を無駄にしないよう、許容重量に寄せた構成です。一粒一粒、余韻まで愉しめるバランスを意識しました。
        </div>

        <div class="border border-amber-200/80 bg-amber-50/70 p-4 text-[11px] leading-relaxed text-amber-900">
          <strong class="font-semibold">職人商品に関するご案内：</strong>
          {pack.substitutionPolicy ||
            '職人系・季節商品のため、パッケージや仕様が変わる場合があります。欠品時は同品質・同価格帯の近しい商品へ置き換えることがあります。'}
        </div>

        {#if pack.status === 'available'}
          <button
            type="button"
            on:click={handleCheckout}
            class="w-full rounded-sm bg-marche-bleu py-5 text-sm font-bold tracking-[0.32em] text-white shadow-[0_22px_50px_-24px_rgba(0,51,102,0.65)] transition-all duration-500 hover:bg-encre active:scale-[0.99]"
          >
            このボックスを手配する
          </button>
        {:else}
          <div class="w-full rounded-sm border border-stone-300 bg-stone-100 py-5 text-center text-sm font-semibold tracking-[0.2em] text-stone-500">
            COMING SOON
          </div>
        {/if}

        <p class="text-center text-[10px] tracking-wide text-stone-400">
          安心の Stripe 決済 · 日本発行カード対応
        </p>
      </div>
    </Reveal>
  </div>
</article>
