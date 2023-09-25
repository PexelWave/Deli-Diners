import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
  },
  daisyui: {
    themes: ["light", "cupcake", "lemonade", "lofi", "acid", "night"]
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
}
export default config
