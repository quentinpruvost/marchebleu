<script>
  import { absoluteAsset } from '$lib/seo/siteOrigin.js';

  /** @type {{ site?: string; canonicalUrl?: string }} */
  export let data;

  $: ogImage = data.site ? absoluteAsset(data.site, '/1774016218283.jpg') : '';
</script>

<svelte:head>
  <title>プライバシーポリシー | Marché Bleu</title>
  <meta
    name="description"
    content="Marché Bleu の個人情報の取り扱い、決済、Cookie 等に関する方針です。"
  />
  {#if data.canonicalUrl}
    <meta property="og:url" content={data.canonicalUrl} />
  {/if}
  <meta property="og:title" content="プライバシーポリシー | Marché Bleu" />
  <meta
    property="og:description"
    content="Marché Bleu の個人情報の取り扱い、決済、Cookie 等に関する方針です。"
  />
  <meta property="og:type" content="website" />
  {#if ogImage}
    <meta property="og:image" content={ogImage} />
  {/if}
</svelte:head>

<div class="mx-auto max-w-3xl py-14 pb-24 md:py-20">
  <p class="text-[11px] tracking-[0.35em] text-terre-cuite">PRIVACY</p>
  <h1 class="mt-3 font-serif text-3xl text-stone-800 md:text-4xl">プライバシーポリシー</h1>
  <p class="mt-6 text-sm leading-relaxed text-stone-600">
    Marché Bleu（以下「当ショップ」）は、お客様の個人情報を尊重し、適正に取り扱います。本ポリシーは随時改定される場合があり、改定後の内容は本ページに掲示した時点で効力を生じます。
  </p>

  <div class="mt-12 space-y-10 text-sm leading-relaxed text-stone-700">
    <section>
      <h2 class="text-base font-semibold text-stone-800">1. 取得する情報</h2>
      <p class="mt-3">
        当ショップは、商品の販売・配送・サポートのため、次の情報を取得する場合があります。氏名、メールアドレス、配送先住所、決済に必要な情報（クレジットカード情報は当ショップのサーバに保存せず、決済代行業者が取り扱います）、お問い合わせ内容、通信に伴う技術情報（IP
        アドレス、ブラウザの種類等）。
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-stone-800">2. 利用目的</h2>
      <p class="mt-3">取得した情報は、次の目的の範囲内で利用します。</p>
      <ul class="mt-3 list-inside list-disc space-y-2 text-stone-600">
        <li>ご注文の受付、代金決済、商品の発送、購入に関するご連絡</li>
        <li>お問い合わせへの対応、本人確認</li>
        <li>法令に基づく対応、不正利用の防止</li>
        <li>サービス品質の向上のための統計的な分析（個人を特定しない形式に限る場合があります）</li>
      </ul>
    </section>

    <section>
      <h2 class="text-base font-semibold text-stone-800">3. 決済処理（Stripe）</h2>
      <p class="mt-3">
        代金決済には Stripe
        を利用します。カード番号等の決済情報は、Stripe のセキュアな環境で処理され、当ショップがカード番号を保存・閲覧することはありません。Stripe
        のプライバシーについては同社のポリシーをご確認ください。
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-stone-800">4. 第三者提供</h2>
      <p class="mt-3">
        当ショップは、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供しません。配送業者・決済代行業者等への提供は、上記の利用目的の達成に必要な範囲に限ります。
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-stone-800">5. 保管期間</h2>
      <p class="mt-3">
        個人情報は、利用目的に必要な期間保管し、当該期間経過後は適切に削除または匿名化します。法令により保管が義務付けられる情報については、当該法令に従います。
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-stone-800">6. Cookie・類似技術</h2>
      <p class="mt-3">
        当サイトでは、セッション維持や閲覧体験の向上のために Cookie
        を使用する場合があります。ブラウザの設定により Cookie を無効にできますが、一部機能が利用できなくなることがあります。
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-stone-800">7. お問い合わせ</h2>
      <p class="mt-3">
        個人情報の開示・訂正・削除等のご請求、または本ポリシーに関するお問い合わせは、当ショップの連絡先メールにて受け付けます。合理的な期間内に、法令に従い対応いたします。
      </p>
    </section>
  </div>

  <p class="mt-14 text-center text-[11px] text-stone-500">
    <a
      href="/"
      class="border-b border-stone-300 transition-colors hover:border-marche-bleu hover:text-marche-bleu">トップへ戻る</a>
  </p>
</div>
