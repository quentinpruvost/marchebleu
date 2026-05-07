// src/lib/data/packs.js
export const packs = [
    {
        id: "pack-decouverte-provence",
        slug: "signature",
        name: "Grand Pack Découverte Provence",
        price: 18900, // Environ 116€ (Port inclus)
        weight: 1.9,
        theme: "Découverte Signature",
        cadence: "Permanent",
        status: "available",
        origin: "France (Montélimar & Provence)",
        brand: "Sélection Artisanale Marché Bleu",
        shipping: "常温 (Température ambiante)",
        description: "南フランスの豊かな食文化を一度に体験できる特別ボックス。モンテリマールの伝統的なヌガーから、プロヴァンスの香り高いハチミツ、そして地元で愛されるお菓子まで、私たちが厳選した最高の品々を詰め込みました。",
        image: "/1774016218283.jpg",
        gallery: [
            "/1774016218283.jpg",
            "/unnamed.jpg",
            "/unnamed (1).jpg",
            "/unnamed (2).jpg",
            "/unnamed (3).jpg",
            "/unnamed (4).jpg",
            "/unnamed (5).jpg",
            "/unnamed (6).jpg",
            "/unnamed (7).jpg",
            "/unnamed (8).jpg",
            "/unnamed (9).jpg",
            "/unnamed (10).jpg",
            "/unnamed (11).jpg",
            "/unnamed (12).jpg"
        ],
        tags: ["Best Seller", "Authentique"],
        substitutionPolicy:
            "職人系・季節商品を含むため、パッケージやメーカー仕様が変更される場合があります。品質基準を満たす同等品で代替することがあります。",
        content: [
            "Les Trois Abeilles 伝統的なヌガー（テンダー）- 200g",
            "Maurel エクス・アン・プロヴァンスのカリソン - 1箱 (340g)",
            "Sabaton 栗のクリーム (AOP) - 1本 (チューブタイプ)",
            "Bonne Maman チョコチップクッキー - 1袋",
            "St Michel ミニガレット（コンテAOP）- 1袋",
            "Nestlé L'Atelier（キャラメル＆アーモンド）- 1枚",
            "Côte d'Or Lait Biscoff チョコレート - 1枚",
            "Michel & Augustin チョリソー・ビスケット - 1袋",
            "プロヴァンス産ラベンダーのサシェ"
        ],
        story: "「何から選べばいいかわからない」という方のために、私たちが毎日食べている大好きなものだけを全て詰め込みました。箱を開けた瞬間、プロヴァンスの太陽と香りを感じていただけるはずです。"
    },
    {
        id: "petit-dejeuner-francais",
        slug: "petit-dejeuner",
        name: "Petit Déjeuner Français",
        price: 14900,
        weight: 1.5,
        theme: "朝食コレクション",
        cadence: "Saisonnier",
        status: "upcoming",
        origin: "France (Drôme, Provence)",
        brand: "Sélection Artisanale Marché Bleu",
        shipping: "常温 (Température ambiante)",
        description:
            "フランスの朝時間をテーマにしたセット。香りのよいジャム、ビスケット、朝のテーブルを彩る小さなご褒美を中心に構成予定です。",
        image: "/unnamed (3).jpg",
        gallery: ["/unnamed (3).jpg", "/unnamed (6).jpg", "/unnamed (11).jpg"],
        tags: ["Coming Soon", "Breakfast"],
        substitutionPolicy:
            "季節の収穫・生産状況により、同カテゴリ内で等価な銘柄へ変更する場合があります。",
        content: [
            "Confiture artisanale（季節）",
            "Biscuits de petit déjeuner",
            "Miel de Provence",
            "Infusion ou café de terroir"
        ],
        story: "日本の朝にも馴染む、軽やかで上品なフランスの朝食体験を準備中です。"
    },
    {
        id: "gouter-francais",
        slug: "gouter",
        name: "Goûter Français",
        price: 12900,
        weight: 1.3,
        theme: "午後のおやつ",
        cadence: "Saisonnier",
        status: "upcoming",
        origin: "France (Montélimar & alentours)",
        brand: "Sélection Artisanale Marché Bleu",
        shipping: "常温 (Température ambiante)",
        description:
            "フランスらしい“15時の甘い時間”をテーマにしたセット。ヌガー、ショコラ、焼き菓子を中心に季節感あるラインナップで展開予定です。",
        image: "/unnamed (8).jpg",
        gallery: ["/unnamed (8).jpg", "/unnamed (10).jpg", "/unnamed (12).jpg"],
        tags: ["Coming Soon", "Goûter"],
        substitutionPolicy:
            "職人系焼き菓子はロット差があるため、欠品時は同等価格帯・同カテゴリで代替する場合があります。",
        content: [
            "Nougat de Montélimar",
            "Chocolat de dégustation",
            "Biscuits artisanaux",
            "Surprise gourmande saisonnière"
        ],
        story: "午後のひと息が、ちいさな旅になる。そんな一箱を目指しています。"
    }
];