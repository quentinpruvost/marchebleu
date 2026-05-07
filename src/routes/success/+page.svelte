<script>
  import { onMount } from 'svelte';
  // Optionnel : Vous pourriez ajouter une animation de confettis ici plus tard
</script>

<div class="py-20 text-center animate-fade-in">
  <div class="max-w-2xl mx-auto px-4">
    <div class="inline-flex items-center justify-center w-20 h-20 bg-marche-bleu text-white rounded-full mb-8 shadow-lg">
      <span class="text-3xl"> Merci </span>
    </div>

    <h1 class="text-3xl md:text-4xl font-serif text-stone-800 leading-tight mb-6">
      ご注文ありがとうございます！<br>
      <span class="text-lg text-marche-bleu font-sans uppercase tracking-[0.2em]">Merci pour votre commande</span>
    </h1>

    <div class="bg-white p-8 border border-stone-100 shadow-sm space-y-6 text-stone-600 leading-loose">
      <p>
        カンタンとリディアです。この度はMarché Bleuをお選びいただき、本当にありがとうございます。
      </p>
      <p>
        私たちは今からモンテリマールの街へ、あなたの大切なボックスを準備するために買い付けに行ってきます。
      </p>
      <p class="text-sm">
        発送が完了しましたら、追跡番号をメールにてお知らせいたします。フランスからの到着を楽しみにお待ちください。
      </p>
    </div>

    <div class="mt-12 flex flex-col items-center">
      <div class="w-12 h-px bg-stone-200 mb-6"></div>
      <a href="/" class="text-xs uppercase tracking-widest text-stone-400 hover:text-marche-bleu transition-colors border-b border-stone-200 pb-1">
        ホームへ戻る (Retour à l'accueil)
      </a>
    </div>
  </div>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>