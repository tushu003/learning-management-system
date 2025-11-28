// tailwind.config.js
import daisyui from 'daisyui';
import themes from 'daisyui/theme/object';
// import themes from 'daisyui/theme/object';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // first theme in the array is used as default unless overridden
    // optional: set darkTheme name if needed
    // darkTheme: "dark",
  },
  
}

export default config