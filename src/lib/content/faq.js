/**
 * FAQ : réponses factuelles à ajuster selon ta politique commerciale.
 */

/** @typedef {{ questionJa: string; questionFr: string; answerJa: string; answerFr: string }} FaqPair */

/** @type {FaqPair[]} */
export const faqPairs = [
	{
		questionJa: '注文後、どのくらいで準備・発送されますか？',
		questionFr: 'Combien de jours après commande jusqu’à l’expédition ?',
		answerJa:
			'決済確認後、モンテリマール周辺で買い付けして梱包します。発送準備におよそ1週間前後かかることが多く、繁忙期・休業により前後することがあります。発送後、追跡可能な経路での配送としメールでお知らせします。',
		answerFr:
			"Après paiement confirmé nous achetons puis emballons. Compter souvent ~1 semaine ouvrée avant prise postale selon saison / charge artisanale ensuite email tracking."
	},
	{
		questionJa: 'フランスから日本へ届くまで、だいたい何週間ですか？',
		questionFr: 'Durée indicative France → Japon ?',
		answerJa:
			'発送後、経路・税関・気象などにより異なり、目安として**おおよそ2〜6週間**見てください。**保証できる日数ではありません**。稀にもっと時間がかかる場合があります。',
		answerFr:
			"Après enlèvement colis généralement 2 à 6 semaines environ variables douane / lignes—not guaranteed—exceptions possibles saison."
	},
	{
		questionJa: '「およそ○週間」と聞いたのですが、その通りになりますか？',
		questionFr: 'Si on annonce environ X semaines, est-ce garanti ?',
		answerJa:
			'いいえ。国際郵送は環境変化の影響を受けるため固定の納期を約束できません。いただいた目安は多くのお届けでの経験的なレンジです。',
		answerFr:
			"Non aucune garantie date exacte environnement postal international évolutif nous communiquons plage indicative large volontairement."
	},
	{
		questionJa: '箱の内容はいつも同じですか？',
		questionFr: 'Le contenu varie‑t‑il ?',
		answerJa:
			'写真・リストは構成の目安です。職人ロットや季節仕入により、同等品質の代替またはパッケージ変更が発生することがあります（詳しくは商品ページと同様のご案内に従います）。',
		answerFr:
			"Liste indicative : substitutions professionnel saisonnières possibles garantissant profil gustatif prix équivalent—voir disclaimers pages produits."
	},
	{
		questionJa: '支払いは安全ですか？',
		questionFr: 'Paiements sécurisés ?',
		answerJa:
			'Stripeのカード決済です。番号類はStripe側で処理され、当サイトのサーバーに保存されません。',
		answerFr:
			'Cartes via Stripe aucune données PAN persistée nos serveurs infrastructure PCI niveau Stripe.'
	},
	{
		questionJa: 'キャンセルや返品はできますか？',
		questionFr: 'Annulation ou retours alimentaires ?',
		answerJa:
			'ご注文後の買い付けとなる食品のため、原則お客様都合のキャンセル・返品はお断りしています。明らかな破損等は到着後すみやかにメールでご相談ください。',
		answerFr:
			"Pas remboursement subjectif général après achat vivant rupture saison—sinistre vérifiable contact rapide solution au cas étudié médias preuves photos."
	},
	{
		questionJa: '配送できるのはどの国ですか？',
		questionFr: 'Pays livrés ?',
		answerJa: 'チェックアウト時は日本国内の配送住所のみご利用いただけます。',
		answerFr:
			"Checkout restreint adresses japonaises nationales autres pays désactivés actuel stage focus."
	}
];
