<script>
  import GuideArticleBody from '$lib/components/GuideArticleBody.svelte';
  import { absoluteAsset } from '$lib/seo/siteOrigin.js';

  /** @type {{ guide: Record<string, any>; locale: string; site?: string; canonicalUrl?: string }} */
  export let data;

  $: ({ guide } = data);
  $: site = data.site ?? '';
  $: canonicalUrl = data.canonicalUrl ?? '';
  $: urlJa = site ? `${site}/guides/${guide.slug}` : '';
  $: urlFr = site ? `${site}/fr/guides/${guide.slug}` : '';
  $: title = `${guide.titleJa} | Marché Bleu`;
  $: metaDescription = guide.descJa;
  $: ldImage = site ? absoluteAsset(site, '/1774016218283.jpg') : '';

  $: articleLdJson =
    site &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${urlJa}/#article`,
      headline: guide.titleJa,
      description: guide.descJa,
      datePublished: guide.datePublished,
      inLanguage: 'ja-JP',
      image: [ldImage],
      author: { '@type': 'Organization', name: 'Marché Bleu', url: site },
      publisher: {
        '@type': 'Organization',
        name: 'Marché Bleu',
        logo: { '@type': 'ImageObject', url: absoluteAsset(site, '/1774016218283.jpg') }
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': urlJa }
    });

  $: breadcrumbLdJson =
    site &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: site },
        { '@type': 'ListItem', position: 2, name: 'ガイド一覧', item: `${site}/guides` },
        { '@type': 'ListItem', position: 3, name: guide.titleJa, item: urlJa }
      ]
    });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metaDescription} />
  {#if site}
    <link rel="alternate" hreflang="ja" href={urlJa} />
    <link rel="alternate" hreflang="fr-FR" href={urlFr} />
    <link rel="alternate" hreflang="x-default" href={urlJa} />
  {/if}
  {#if canonicalUrl}
    <meta property="og:url" content={canonicalUrl} />
  {/if}
  <meta property="og:title" content={title} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:type" content="article" />
  {#if ldImage}
    <meta property="og:image" content={ldImage} />
    <meta property="og:image:alt" content={guide.titleJa} />
  {/if}

  {#if articleLdJson}
    <svelte:element this={'script'} type="application/ld+json">{articleLdJson}</svelte:element>
  {/if}
  {#if breadcrumbLdJson}
    <svelte:element this={'script'} type="application/ld+json">{breadcrumbLdJson}</svelte:element>
  {/if}
</svelte:head>

<GuideArticleBody {guide} locale="ja" />
