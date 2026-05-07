<script>
  import { packs } from '$lib/data/packs.js';
  import Reveal from '$lib/ui/Reveal.svelte';
  import ParallaxFrame from '$lib/ui/ParallaxFrame.svelte';
  import { absoluteAsset } from '$lib/seo/siteOrigin.js';

  /** @type {{ site?: string; canonicalUrl?: string }} */
  export let data;

  const availablePacks = packs.filter((pack) => pack.status === 'available');
  const mainPack = availablePacks[0] || packs[0];
  const formattedPrice = new Intl.NumberFormat('ja-JP').format(mainPack.price);
  const heroImage = mainPack.gallery?.[0] || mainPack.image;
  const storyImages = (mainPack.gallery || []).slice(1, 5);
  const moodImages = (mainPack.gallery || []).slice(5, 11);

  const homeTitle =
    'Marché Bleu | 南仏モンテリマール発・フランス美食セレクション直送／ヌガー・プロヴァンス';
  const homeDescription =
    '南フランス・モンテリマールより、職人手仕事のフランスグルメを日本へ。署名ボックスでのお取り寄せ、Stripe安心決済、追跡付き直送、税込・国際送料込みでお届け。';

  $: site = data.site ?? '';
  $: canonicalUrl = data.canonicalUrl ?? '';
  $: ogImage = site ? absoluteAsset(site, '/1774016218283.jpg') : '';
  $: websiteLdJson =
    site &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'Marché Bleu',
      url: site,
      inLanguage: 'ja-JP',
      publisher: {
        '@type': 'Organization',
        name: 'Marché Bleu',
        url: site
      }
    });

  $: itemListLdJson =
    site &&
    packs.length > 0 &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Marché Bleu コレクション',
      itemListElement: packs.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `${site}/product/${p.id}`
      }))
    });
</script>

<svelte:head>
  <title>{homeTitle}</title>
  <meta name="description" content={homeDescription} />
  <meta
    name="keywords"
    content="フランスお取り寄せ,Montélimar,モンテリマール,ヌガー,プロヴァンス,Marché Bleu,フランス菓子,ギフトボックス"
  />

  {#if canonicalUrl}
    <meta property="og:url" content={canonicalUrl} />
  {/if}
  <meta property="og:title" content={homeTitle} />
  <meta property="og:description" content={homeDescription} />
  <meta property="og:type" content="website" />
  {#if ogImage}
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:alt" content="Marché Bleu セレクション — フランスグルメギフトボックス" />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={homeTitle} />
  <meta name="twitter:description" content={homeDescription} />
  {#if ogImage}
    <meta name="twitter:image" content={ogImage} />
  {/if}

  {#if site}
    <link rel="alternate" hreflang="ja" href={`${site}/`} />
    <link rel="alternate" hreflang="fr-FR" href={`${site}/fr`} />
    <link rel="alternate" hreflang="x-default" href={`${site}/`} />
  {/if}

  {#if websiteLdJson}
    <svelte:element this={'script'} type="application/ld+json">{websiteLdJson}</svelte:element>
  {/if}
  {#if itemListLdJson}
    <svelte:element this={'script'} type="application/ld+json">{itemListLdJson}</svelte:element>
  {/if}
</svelte:head>

<section class="pt-10 pb-20 md:pt-14 md:pb-24">
  <div class="max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
      <Reveal as="div" extraClass="space-y-7">
        <span
          class="inline-block text-[10px] text-terre-cuite tracking-[0.4em] font-medium border-b border-terre-cuite/25 pb-2"
        >
          ジャパン向け · 手仕事セレクション
        </span>
        <h1 class="text-4xl md:text-6xl font-serif text-stone-800 leading-[1.15]">
          静かな贅沢を、<br />
          箱ひとつに整えて。
        </h1>
        <p class="text-stone-600 leading-[1.85] text-sm md:text-base max-w-xl">
          南仏の陽光と、職人の手元。モンテリマールの暮らしのなかで、私たちが本当に手放したくない味だけを。在庫を抱えず、ご注文のたびに街へ。一本の道のりを、ふたりで歩みます。
        </p>
        <div class="flex flex-wrap gap-4 pt-2">
          <a
            href="/product/{mainPack.id}"
            class="bg-marche-bleu px-8 py-4 text-[11px] font-bold tracking-[0.3em] text-white shadow-[0_18px_42px_-22px_rgba(0,51,102,0.55)] transition-all duration-500 hover:bg-[#0A274F] hover:shadow-[0_22px_50px_-18px_rgba(0,51,102,0.42)]"
          >
            シグネチャーボックス
          </a>
          <a
            href="#story"
            class="border border-stone-300/90 bg-white/60 px-8 py-4 text-[11px] tracking-[0.2em] font-medium text-stone-700 backdrop-blur-sm transition-all duration-500 hover:border-marche-bleu/40 hover:text-marche-bleu"
          >
            物語を読む
          </a>
        </div>
      </Reveal>

      <Reveal as="div" extraClass="relative" delay={80}>
        <ParallaxFrame
          src={heroImage}
          alt={mainPack.name}
          frameClass="shadow-2xl"
          aspectClass="aspect-[4/5]"
        />
        <div
          class="absolute -bottom-6 -left-4 md:-left-6 max-w-[min(100%,18rem)] border border-stone-200/80 bg-[#F7F5F0]/95 px-6 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] backdrop-blur-sm"
        >
          <p class="text-[10px] tracking-[0.32em] text-stone-500">SIGNATURE</p>
          <p class="mt-1 font-serif text-2xl text-marche-bleu">¥{formattedPrice}</p>
          <p class="mt-1.5 text-[10px] leading-relaxed text-stone-500">税込 · 国際送料込み</p>
        </div>
      </Reveal>
    </div>
  </div>
</section>

<section id="story" class="py-20 bg-[#EEE9DF]/60 -mx-4 px-4">
  <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
    <Reveal as="div" extraClass="space-y-6">
      <h3 class="text-[11px] tracking-[0.5em] text-terre-cuite font-medium">STORY</h3>
      <p class="text-3xl md:text-4xl font-serif text-stone-800 leading-[1.2]">
        感謝のかたちは、<br />
        本物の味に宿る。
      </p>
      <div class="space-y-4 text-stone-600 leading-[1.85] text-sm md:text-base">
        <p>何度も訪れる日本の、美意識と静けさ。丁寧な一礼、手元の温かさに、私たちは何度も救われました。</p>
        <p>
          その想いに応えるには、華やかさよりも誠実さ。だから選ぶのは、旅先の記念ではなく、暮らしのなかで繰り返し買う「間違いのない一本」だけです。
        </p>
        <p class="pt-2 font-serif text-[15px] italic text-marche-bleu">Quentin & Lydia — Montélimar</p>
      </div>
    </Reveal>

    <div class="grid grid-cols-2 gap-3">
      {#each storyImages as image, i}
        <Reveal as="div" extraClass="aspect-square overflow-hidden shadow-md" delay={i * 70}>
          <img
            src={image}
            alt="Marché Bleu のひとコマ"
            class="h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
          />
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<section id="collections" class="py-20 bg-white -mx-4 px-4 border-y border-stone-200/70">
  <div class="max-w-6xl mx-auto">
    <Reveal as="header" extraClass="text-center mb-12">
      <h3 class="text-[11px] font-medium tracking-[0.5em] text-terre-cuite">COLLECTION PLAN</h3>
      <h4 class="mt-3 font-serif text-3xl text-stone-800 md:text-4xl">今後の展開について</h4>
      <p class="mt-5 mx-auto max-w-3xl text-sm text-stone-600 leading-[1.9]">
        おすすめ運用は「定番1〜2種を常時販売 + 季節テーマを1〜2種同時展開」です。毎月すべてを入れ替えるより、
        6〜8週間ごとに季節コレクションを更新する方が、再購入と運用負荷のバランスが良くなります。
      </p>
    </Reveal>

    <div class="grid gap-5 md:grid-cols-3">
      {#each packs as pack, i}
        <Reveal as="article" extraClass="border border-stone-200 bg-[#F9F7F2] p-5 flex flex-col" delay={i * 60}>
          <img src={pack.image} alt={pack.name} class="h-36 w-full object-cover mb-4" />
          <p class="text-[10px] tracking-[0.22em] text-stone-500">{pack.theme} · {pack.cadence}</p>
          <h5 class="mt-2 font-serif text-xl text-stone-800">{pack.name}</h5>
          <p class="mt-3 text-xs leading-[1.75] text-stone-600 flex-1">{pack.description}</p>
          {#if pack.status === 'available'}
            <a
              href="/product/{pack.id}"
              class="mt-4 inline-block bg-marche-bleu text-white text-[11px] py-3 text-center tracking-[0.2em] font-semibold"
            >
              詳細を見る
            </a>
          {:else}
            <div class="mt-4 inline-block border border-stone-300 text-stone-500 text-[11px] py-3 text-center tracking-[0.2em] font-semibold">
              COMING SOON
            </div>
          {/if}
        </Reveal>
      {/each}
    </div>

    <Reveal as="div" extraClass="mt-10 grid gap-4 md:grid-cols-2">
      <div class="border border-stone-200 bg-stone-50 p-5 text-xs leading-[1.8] text-stone-600">
        <p class="font-semibold text-stone-800 mb-2">おすすめ販売戦略</p>
        <p>
          まずは同時に2〜3種類を見せる構成が最適です。価格帯の違う選択肢（例: Signature / Petit Déjeuner / Goûter）を並べると、
          「今買う理由」が明確になります。
        </p>
      </div>
      <div class="border border-stone-200 bg-stone-50 p-5 text-xs leading-[1.8] text-stone-600">
        <p class="font-semibold text-stone-800 mb-2">サブスク（次の段階）</p>
        <p>
          初期は単品販売で検証し、リピートが増えてきた段階で「隔月便（2ヶ月ごと）」を追加するのが安全です。
          現在は <strong>waitlist（事前登録）</strong> のみ告知する設計がベストです。
        </p>
      </div>
    </Reveal>
  </div>
</section>

<section id="exclusive-pack" class="py-24 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <Reveal as="header" extraClass="text-center mb-14">
      <h3 class="mb-4 text-[11px] font-medium tracking-[0.55em] text-terre-cuite">THE OFFER</h3>
      <h4 class="font-serif text-4xl text-stone-800 md:text-5xl">Grand Pack Découverte</h4>
      <div class="mx-auto mt-7 h-px w-24 bg-stone-300/90"></div>
      <p class="mx-auto mt-6 max-w-lg text-[12px] leading-relaxed text-stone-500">
        ご自宅で味わう、南仏の食卓。香り・食感・余韻。余計なものは入れず、愉しみだけを詰めました。
      </p>
    </Reveal>

    <div class="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
      <Reveal as="div" extraClass="aspect-square overflow-hidden bg-stone-100 shadow-xl">
        <img
          src={mainPack.image}
          alt={mainPack.name}
          class="h-full w-full object-cover transition-transform duration-[1.25s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
        />
      </Reveal>

      <Reveal as="div" extraClass="space-y-7" delay={90}>
        <div
          class="inline-block bg-marche-bleu px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-white"
        >
          Montélimar 発 · 直送
        </div>
        <h2 class="font-serif text-3xl leading-tight text-stone-800 md:text-5xl">{mainPack.name}</h2>

        <p class="max-w-xl text-sm leading-[1.85] text-stone-600 md:text-base">
          {mainPack.description}
        </p>

        <div class="border-y border-stone-200 py-5">
          <div class="flex items-baseline gap-4">
            <span class="font-light text-4xl text-marche-bleu">¥{formattedPrice}</span>
            <span class="text-[10px] text-stone-400">税込 · 国際送料込み</span>
          </div>
          <p class="mt-2 text-[11px] text-stone-400">※ 内容量 約2kg 前後のラグジュアリーな分量感</p>
        </div>

        <div class="border border-amber-200/80 bg-amber-50/70 p-4 text-[11px] leading-relaxed text-amber-900">
          <strong class="font-semibold">ご案内：</strong>
          職人商品や季節ロットを扱うため、パッケージや仕様が変わる場合があります。欠品時は同品質・同価格帯の近い商品へ置き換えることがあります。
        </div>

        <a
          href="/product/{mainPack.id}"
          class="block w-full bg-marche-bleu py-5 text-center text-sm font-bold tracking-[0.3em] text-white shadow-lg transition-all duration-500 hover:bg-encre hover:shadow-xl"
        >
          ボックスの全貌を見る
        </a>
      </Reveal>
    </div>
  </div>
</section>

<section class="-mx-4 border-y border-stone-200/60 bg-[#FAF9F6] px-4 py-14 md:py-16">
  <div class="max-w-3xl mx-auto px-4 text-center md:px-6">
    <h3 class="text-[11px] font-medium tracking-[0.45em] text-terre-cuite">READ</h3>
    <p class="mt-3 font-serif text-2xl text-stone-800 md:text-3xl leading-snug">産地ガイド</p>
    <p class="mt-4 text-sm leading-relaxed text-stone-600">
      ヌガー、プロヴァンス、キャリソン。<br class="hidden sm:inline" />
      フランス側のコンテキストを日本語でもフランス語でも読めるようにしています（SEOにも有益です）。
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-5 text-[11px] font-semibold uppercase tracking-[0.2em]">
      <a href="/guides" class="border-b border-marche-bleu/40 pb-0.5 text-marche-bleu hover:border-marche-bleu">一覧を見る</a>
      <a href="/fr/guides" lang="fr" class="text-stone-500 hover:text-marche-bleu">Voir en français</a>
      <a href="/faq" class="text-stone-500 hover:text-marche-bleu">FAQ</a>
    </div>
  </div>
</section>

<section class="py-20 -mx-4 bg-[#F5F2EA] px-4">
  <div class="max-w-5xl mx-auto grid grid-cols-1 gap-12 px-4 text-center md:grid-cols-3">
    <Reveal as="div" extraClass="group">
      <div
        class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-stone-200/80 bg-white/90 text-2xl shadow-sm transition-shadow duration-500 group-hover:shadow-md"
      >
        🛒
      </div>
      <h3 class="mb-3 font-serif text-sm font-bold tracking-[0.2em] text-stone-800">厳選</h3>
      <p class="px-2 text-xs leading-[1.85] text-stone-500">
        職人の店、市場、私たちの定番。納得のいく一本に出会うまで、妥協しません。
      </p>
    </Reveal>

    <Reveal as="div" extraClass="group" delay={70}>
      <div
        class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-stone-200/80 bg-white/90 text-2xl shadow-sm transition-shadow duration-500 group-hover:shadow-md"
      >
        ✈️
      </div>
      <h3 class="mb-3 font-serif text-sm font-bold tracking-[0.2em] text-stone-800">鮮度</h3>
      <p class="px-2 text-xs leading-[1.85] text-stone-500">
        注文のあとに買い付け。余計な在庫を持たず、香りの立つタイミングを大切に。
      </p>
    </Reveal>

    <Reveal as="div" extraClass="group" delay={140}>
      <div
        class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-stone-200/80 bg-white/90 text-2xl shadow-sm transition-shadow duration-500 group-hover:shadow-md"
      >
        🎁
      </div>
      <h3 class="mb-3 font-serif text-sm font-bold tracking-[0.2em] text-stone-800">手仕上げ</h3>
      <p class="px-2 text-xs leading-[1.85] text-stone-500">
        梱包、短い手紙、追跡のご案内。小さな箱に、心を整えて添えます。
      </p>
    </Reveal>
  </div>
</section>

<section class="py-20">
  <div class="max-w-6xl mx-auto">
    <Reveal as="header" extraClass="mb-10 text-center">
      <h3 class="text-[11px] font-medium tracking-[0.45em] text-terre-cuite">GALLERY</h3>
      <p class="mt-3 text-sm text-stone-500">南仏の光と、食卓の余白。</p>
    </Reveal>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      {#each moodImages as image, i}
        <Reveal
          as="div"
          extraClass="aspect-[4/5] overflow-hidden shadow-[0_18px_45px_-28px_rgba(0,0,0,0.35)]"
          delay={i * 55}
        >
          <img
            src={image}
            alt="プロヴァンスのひと匙"
            class="h-full w-full object-cover transition-transform duration-[1.15s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.035]"
          />
        </Reveal>
      {/each}
    </div>
  </div>
</section>
