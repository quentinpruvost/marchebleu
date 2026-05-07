<script>
  export let id;
  export let name;
  export let price;
  export let description;
  export let image;
  export let tag;
</script>

<div class="group bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
  <div class="relative aspect-[4/5] bg-stone-100 overflow-hidden">
    <img src={image} alt={name} class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
    <div class="absolute top-4 left-4 bg-marche-bleu text-white text-[10px] px-2 py-1 tracking-widest uppercase font-bold">
      {tag}
    </div>
  </div>

  <div class="p-6 text-center">
    <h3 class="font-serif text-xl text-stone-800 tracking-tight">{name}</h3>
    <p class="text-[10px] text-stone-400 mt-1 uppercase tracking-widest">モンテリマール直送</p>
    
    <div class="my-4 h-px bg-stone-100 w-12 mx-auto"></div>
    
    <p class="text-xs text-stone-600 line-clamp-2 leading-relaxed h-10">
      {description}
    </p>

    <div class="mt-6 flex flex-col items-center">
      <span class="text-xl font-bold text-marche-bleu">¥{new Intl.NumberFormat('ja-JP').format(price)}</span>
      <span class="text-[9px] text-stone-400 mt-1">※国際送料・手数料込み</span>
    </div>

    <a href="/product/{id}" class="mt-6 block w-full border border-marche-bleu text-marche-bleu py-3 text-[11px] tracking-[0.2em] hover:bg-marche-bleu hover:text-white transition-colors font-bold text-center">
      詳細を見る
    </a>
  </div>
</div>