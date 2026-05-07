<script>
  import { page } from '$app/stores';
  import "../app.css";
  import { organizationSameAs } from '$lib/social/profiles.js';

  /** @type {{ site?: string; canonicalUrl?: string }} */
  export let data;

  $: canonicalUrl = data?.canonicalUrl ?? "";
  $: site = data?.site ?? "";
  /**
   * @param {string} pathname
   * @returns {boolean}
   */
  function isFrenchPath(pathname) {
    return pathname === "/fr" || pathname.startsWith("/fr/");
  }
  $: ogLocaleDefault = isFrenchPath($page.url.pathname) ? "fr_FR" : "ja_JP";
  $: organizationLdJson =
    site &&
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Marché Bleu",
      url: site,
      sameAs: organizationSameAs,
      logo: `${site}/1774016218283.jpg`,
      slogan: "南仏モンテリマールから、フランスの美食セレクションを日本へ。",
      areaServed: "JP",
      foundingLocation: { "@type": "Place", addressLocality: "Montélimar", addressCountry: "FR" },
      founders: [{ "@type": "Person", name: "Quentin" }, { "@type": "Person", name: "Lydia" }],
      identifiers: [{ "@type": "PropertyValue", propertyID: "SIREN", value: "100 160 043" }]
    });

  $: robotsMeta = $page.url.pathname.startsWith('/success')
    ? 'noindex, nofollow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

  let scrollY = 0;
  $: headerCompact = scrollY > 28;
</script>

<svelte:window bind:scrollY />

<svelte:head>
  {#if canonicalUrl}
    <link rel="canonical" href={canonicalUrl} />
  {/if}
  {#if site}
    <meta property="og:site_name" content="Marché Bleu" />
    <meta property="og:locale" content={ogLocaleDefault} />
  {/if}
  <meta name="theme-color" content="#003366" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta name="robots" content={robotsMeta} />
  <meta name="author" content="Marché Bleu · Quentin & Lydia" />

  {#if organizationLdJson}
    <svelte:element this={'script'} type="application/ld+json">{organizationLdJson}</svelte:element>
  {/if}
</svelte:head>

<div
  class="app-shell bg-[#F7F5F0] text-[#222] font-sans selection:bg-marche-bleu selection:text-white text-[15px]"
>
  <div class="bg-[#0B1D3A] text-white text-[9px] md:text-[11px] py-2.5 text-center tracking-[0.14em] font-medium">
    南仏モンテリマール発 · ご注文後に買い付け · 少人数で丁寧にお届けします
  </div>

  <header
    class="border-b border-stone-200/70 bg-[#F7F5F0]/85 px-4 text-center backdrop-blur-md transition-[padding,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sticky top-0 z-50 {headerCompact
      ? 'shadow-[0_12px_40px_-28px_rgba(0,0,0,0.18)]'
      : ''}"
  >
    <div
      class="mx-auto flex max-w-6xl flex-col items-center transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] {headerCompact
        ? 'py-3 md:py-3.5'
        : 'py-7 md:py-8'}"
    >
      <a href="/" class="group flex flex-col items-center" aria-label="Marché Bleu — ホーム">
        <span
          class="text-stone-500 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] {headerCompact
            ? 'text-[9px] tracking-[0.36em] opacity-75'
            : 'text-[10px] tracking-[0.42em]'}"
          >セレクション · Marché Bleu</span>
        <span
          class="font-serif text-marche-bleu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:tracking-normal {headerCompact
            ? 'mt-0 text-2xl tracking-tight md:text-3xl'
            : 'mt-1 text-4xl tracking-tight transition-all md:text-5xl'}"
          >Marché Bleu</span>
        <div
          class="mx-auto mt-2 h-px bg-marche-bleu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 {headerCompact
            ? 'w-10 scale-x-50 opacity-60 group-hover:scale-x-100'
            : 'w-16 scale-x-0'}"
        ></div>
      </a>
      <p
        class="overflow-hidden text-stone-500 transition-[margin,max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] {headerCompact
          ? 'mt-0 max-h-0 opacity-0'
          : 'mt-3 max-h-24 tracking-[0.22em] opacity-100'}"
      >
        Quentin & Lydia — 暮らす街で信じる味だけを
      </p>
      {#if !headerCompact}
        <nav
          aria-label={isFrenchPath($page.url.pathname) ? 'Navigation' : '主要ナビゲーション'}
          class="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-500"
        >
          {#if !isFrenchPath($page.url.pathname)}
            <a href="/guides" lang="ja" class="hover:text-marche-bleu{$page.url.pathname.startsWith('/guides') ? ' text-marche-bleu' : ''}"
              >ガイド</a>
            <a href="/faq" lang="ja" class="hover:text-marche-bleu{$page.url.pathname.startsWith('/faq') ? ' text-marche-bleu' : ''}"
              >FAQ</a>
          {:else}
            <a href="/fr/guides" lang="fr" class="hover:text-marche-bleu{$page.url.pathname.startsWith('/fr/guides') ? ' text-marche-bleu' : ''}"
              >Guides</a>
            <a href="/fr/faq" lang="fr" class="hover:text-marche-bleu{$page.url.pathname.startsWith('/fr/faq') ? ' text-marche-bleu' : ''}"
              >FAQ</a>
          {/if}
          {#if !isFrenchPath($page.url.pathname)}
            <a href="/fr" lang="fr" class="border-b border-transparent hover:border-marche-bleu hover:text-marche-bleu">FR</a>
          {:else}
            <a href="/" lang="ja" class="border-b border-transparent hover:border-marche-bleu hover:text-marche-bleu">日本語サイト</a>
          {/if}
        </nav>
      {/if}
    </div>
  </header>

  <main id="main-content" class="max-w-6xl mx-auto px-4">
    <slot />
  </main>

  <footer class="mt-24 py-16 border-t border-stone-200 bg-[#F2EFE8]">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="mb-10 flex flex-col items-center">
        <div class="w-20 h-20 rounded-full border-2 border-white shadow-lg overflow-hidden mb-4">
          <img src="/unnamed (9).jpg" alt="Marché Bleu quality check" class="w-full h-full object-cover" />
        </div>
        <p class="text-[11px] leading-relaxed text-stone-600">
          南フランスにて、箱ひとつずつ手仕上げ。温度と手のひらの記憶を、丁寧に。
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-[10px] uppercase tracking-widest text-stone-500">
        <div class="flex flex-col gap-2">
          <span class="text-marche-bleu text-xl">💳</span>
          Stripe 安心決済
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-marche-bleu text-xl">✈️</span>
          追跡付き国際郵便
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-marche-bleu text-xl">📦</span>
          手仕事の梱包
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-marche-bleu text-xl">⚖️</span>
          SIREN 100 160 043
        </div>
      </div>
      
      <div class="flex flex-wrap justify-center gap-x-7 gap-y-3 text-[11px] text-stone-600 font-medium">
        <a href="/guides" lang="ja" class="hover:text-marche-bleu transition-colors border-b border-transparent hover:border-marche-bleu">
          ガイド · Guides
        </a>
        <a href="/faq" lang="ja" class="hover:text-marche-bleu transition-colors border-b border-transparent hover:border-marche-bleu">
          FAQ
        </a>
        <a href="/fr" lang="fr" class="hover:text-marche-bleu transition-colors border-b border-transparent hover:border-marche-bleu">
          Français · 仏語版
        </a>
      </div>
      <div
        class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-stone-200/80 pt-8 text-[10px] uppercase tracking-[0.2em] text-stone-500"
      >
        <a href="https://www.instagram.com/marchebleu_france/" rel="me noopener noreferrer" class="hover:text-marche-bleu">
          Instagram
        </a>
        <a href="https://x.com/marchebleuJP" rel="me noopener noreferrer" class="hover:text-marche-bleu">X</a>
        <a href="https://www.tiktok.com/@marchebleujp" rel="me noopener noreferrer" class="hover:text-marche-bleu">
          TikTok
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61589596462417"
          rel="me noopener noreferrer"
          class="hover:text-marche-bleu">Facebook</a>
      </div>
      <div class="mt-8 flex flex-wrap justify-center gap-6 text-[11px] text-stone-600 font-medium">
        <a href="/legal/tokushoho" class="hover:text-marche-bleu transition-colors border-b border-transparent hover:border-marche-bleu">特定商取引法</a>
        <a href="/legal/privacy" class="hover:text-marche-bleu transition-colors border-b border-transparent hover:border-marche-bleu">プライバシーポリシー</a>
      </div>

      <p class="mt-10 text-[10px] text-stone-400 tracking-[0.2em]">
        © 2026 Marché Bleu - Quentin et Lydia - Saint-Bonnet-du-Gard, France
      </p>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    background-color: #FDFCFB;
  }
</style>