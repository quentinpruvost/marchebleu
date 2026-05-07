<script>
  import { onMount } from 'svelte';

  /** @type {string} */
  export let src = '';
  /** @type {string} */
  export let alt = '';
  /** Extra classes on outer frame */
  export let frameClass = '';
  /** e.g. aspect-[4/5] */
  export let aspectClass = 'aspect-[4/5]';
  /** Max vertical shift in px (subtle) */
  export let range = 22;

  /** @type {HTMLDivElement | undefined} */
  let frame;
  let y = 0;
  let reduceMotion = true;

  function update() {
    if (!frame || reduceMotion) {
      y = 0;
      return;
    }
    const rect = frame.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
    y = Math.max(-range, Math.min(range, -progress * range * 1.15));
  }

  onMount(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  });
</script>

<div bind:this={frame} class="overflow-hidden {aspectClass} {frameClass}">
  <img
    {src}
    {alt}
    class="parallax-img h-full w-full object-cover"
    style="--py: {y}px;"
    decoding="async"
    loading="eager"
  />
</div>
