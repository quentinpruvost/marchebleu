/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'marche-bleu': '#003366', // Bleu profond élégant
        'bois-clair': '#F5F5DC',   // Couleur crème/beige pour le fond
        'terre-cuite': '#BC544B', // Pour les accents chaleureux
        'encre': '#1A1A1B'        // Pour le texte (pas tout à fait noir, plus doux)
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'Georgia', 'serif'],
        sans: ['"Noto Sans JP"', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};