import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nature'S Remedy Blog",
  description: "A modern blog dedicated to alternative natural medicine, offering step-by-step solutions using nature's remedies to tackle everyday health challenges. Featuring 5 initial articles on random subjects like using herbal teas for sleep, essential oils for stress relief, plant-based diets for immunity, natural pain relievers, and holistic approaches to digestion issues.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About Us', link: '/about' },
      { text: 'Contact', link: '/contact' },
      { text: 'Resources', link: '/resources' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Nature'S Remedy Blog`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#228B22' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
