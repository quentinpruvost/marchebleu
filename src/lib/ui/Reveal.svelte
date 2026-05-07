<script>
  import { onMount } from 'svelte';

  /** @type {string} */
  export let extraClass = '';
  /** @type {string} */
  export let as = 'div';
  /** Transition delay in ms (stagger) */
  export let delay = 0;
  /** Intersection threshold */
  export let threshold = 0.12;

  /** @type {HTMLElement | undefined} */
  let el;
  let visible = false;

  onMount(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      visible = true;
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible = true;
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  });
</script>

<svelte:element
  this={as}
  bind:this={el}
  class="reveal {visible ? 'reveal-visible' : ''} {extraClass}"
  style="--reveal-delay: {delay}ms;"
>
  <slot />
</svelte:element>
