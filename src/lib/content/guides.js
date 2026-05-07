/**
 * Guides SEO : version JA (principale) + FR miroir (hreflang fr-FR).
 * @typedef {{ slug: string; datePublished: string; titleJa: string; titleFr: string; descJa: string; descFr: string; paragraphsJa: string[]; paragraphsFr: string[] }} Guide
 */

/** @type {Guide[]} */
export const guides = [
	{
		slug: 'nougat-montelimar-histoire',
		datePublished: '2026-01-10',
		titleJa: 'モンテリマールのヌガー：街と菓子のはじまりを旅する',
		titleFr: 'Le nougat de Montélimar : histoire du terroir et du savoir-faire',
		descJa:
			'南ドロームの門番として親しまれるモンテリマール。アーモンド、蜂蜜、砂糖と卵白だけで育まれた伝統と、現代でも続く製法の一端を読み解きます。',
		descFr:
			'Dans la Vallée du Rhône, Montélimar associe depuis longtemps amandes douces et miels locaux dans un équilibre gourmand. Retour factuel sur ce qui définit encore aujourd’hui un nougat artisanal sérieux.',
		paragraphsJa: [
			'フランス南端から北東へ広がる台地の道中、モンテリマールは「旅の休憩地」として栄えてきました。その土地はラベンダー畑だけでなく、良質な植物油性の強い種が育つ環境とも相性がよく、アーモンドと蜂蜜の両方へアクセスできる交通の結節でもありました。',
			'ヌガーを語るとき、名前は産地だけでなく「配合」や「質感」（柔らかいテンダーヌガー／歯応えあるヌガー・デュール）とも結びつきます。産地にある工房によっては伝統製法と現代的な衛生管理体制を両立させ、季節の蜂蜜のフローラルノートまで丁寧に残すことを目標にしているところも少なくありません。',
			'私たちMarché Bleuが意識しているのは、ラベルを追うより「製造過程」の透明さです。小売で見える華やかなパッケージより、何度も買い足したくなるような香りや食感、その持続こそが本物だと捉えています。',
			'日本のお客様には、産地だけでなく“暮らしている街で選んだ味”という物語ごと伝えていきます。読み終えた後、いつもの朝か午後にスライスひとつ足したくなる——そんな距離の近さが、私たちの理想です。'
		],
		paragraphsFr: [
			'Montélimar s’est imposée comme une étape gastronomique sur les grands axes qui relient méditerranée et pays du Nord ; la ville conserve une image forte de desserts aux amandes dorées et aux parfums de miel fleuri.',
			'Le nougat peut varier sensiblement selon cuisson et proportion ingrédients : un nougat mou (tendre) développe davantage notes miellées tandis qu’un nougat dur met en valeur mâche et persistence des grillons d’amande.',
			'Chez Marché Bleu nous priorisons artisans produisant encore en petite série et capables expliquer clairement leur approvisionnement. La promesse marchande ne repose pas seulement sur la mention géographique mais sur la régularité organoleptique ressentie en dégustation.',
			'Nous relatons également comment ces spécialités s’articulent avec le reste coffret découverte afin voyage sensoriel soit cohérent : équilibres sucrés vs salés légers pour compléter thé japonais par exemple.'
		]
	},
	{
		slug: 'provence-saveurs-territoire',
		datePublished: '2026-02-02',
		titleJa: 'プロヴァンスを味わう：蜂蜜、香草、それから食卓のアクセント',
		titleFr: 'Provence gourmande : miels, aromates et usages du terroir',
		descJa:
			'太陽の強い気候が育んだハーブ類と、その香りが移る蜂蜜。フランス南岸のパントリー文化をコンパクトに理解するガイドです。',
		descFr:
			'Miel lavande, fines herbes de garrigue, petits biscuits : la Provence se déguste aussi bien en collation qu’en accompagnement d’un café noir ou d’un infusion légère.',
		paragraphsJa: [
			'プロヴァンスの味覚的印象は、「はっきりした輪郭の甘さ」だけではなく、オリーブや香草がもたらす緑色系のニュアンスに支えられています。そのせいか、単体のジャムだけでなく、アペロの小皿やギャレットとも相性が出やすいのです。',
			'蜂蜜はロットにより香りも変動しますが、これはデメリットではなく季節の証と捉えられることもあります。一定の規格だけを並べ続ける産業モデルとは対照的な、クラフトグルメ側の強みとも言えるでしょう。',
			'私たちがボックスに忍ばせたいのは「派手さではなく気づく喜び」。スプーンひと掬いで広がる花の記憶、クラッカーを噛んだあとのアーモンドの低音——そんなレイヤーを小さく積み上げていきます。'
		],
		paragraphsFr: [
			'Territoire méditerranéen, Provence développe alliances simples mais précises entre oléiculture, apiculture artisanale et pâtisseries sèches de conservation.',
			'La variabilité des récoltes miel reflète précipitations printanières fluctuations : un nectar plus floral sur une saison peut passer plus minérale l’année suivante tout en gardant structure générale.',
			'Marché Bleu sélection priorise usages quotidiens : tartines matinales, pause goûter, petit plateau amis autour infusion rooibos. Nous formulons anecdotes territoires directement japonaises pour éviter caricature folklore.'
		]
	},
	{
		slug: 'calisson-aix-aperçu',
		datePublished: '2026-03-05',
		titleJa: 'カリソンを味わう前に：アイキュ＝シュ＝プロヴァンスとの関係と食文化',
		titleFr:
			"Avant une dégustation de calisson : panorama d'Aix-en-Provence et du patrimoine culinaire environnant",
		descJa:
			'アーモンド・砂糖・メロンのキャンディ入りのアーモンドペースト。この小さな菓子に宿る歴史レイヤーを噛むほど読みほどきます。',
		descFr:
			"Pâte fine d'amandes candied melon et glace royale minimaliste — le calisson raconte élégance méditerranéenne lorsqu'il est confectionné encore à l'ancienne.",
		paragraphsJa: [
			'アイキュ＝シュ＝プロヴァンスは、宮廷文化と地方市場が交差した街です。宮廷由来の細かな作法と、日向ぼっこできる広場でのカフェ文化が同居することで、アーティザン菓子の「見た目より本質」を残しやすい土壌にはなっていると私たちは感じます。',
			'カリソンの表面にある薄い砂糖衣は単なる装いではなく、乾燥による劣化や香り流出をゆるやかに遅らせる役割も果たしています。その仕事の質は、ひとつの角を折ってみれば概ねわかります。',
			'Marché Bleuでは、産地だけでなく“私たちが普段その街で買う銘柄”を軸に据えています。旅先のインパクトではなく、繰り返しの信頼。それがコンテンツの誠実さだと思っています。'
		],
		paragraphsFr: [
			'Aix conjugue salons classiques urbains et petite production qui refuse industrialisation abusive : calisson reste carte identitaire locale.',
			'La couche glacée doit être fine et homogène : si trop épaisse elle masque équilibres amandes / fruits confits créant monotone sucrée.',
			'Nous relions anecdotes historiques japonaises attentes précises livraisons internationales (fragilité couches sucre, vibrations transport, températures logistiques) pour lecteur anticipe meilleure mise scène domestique après ouverture colis.'
		]
	}
];

/** @param {string} slug */
export function getGuide(slug) {
	return guides.find((g) => g.slug === slug);
}
