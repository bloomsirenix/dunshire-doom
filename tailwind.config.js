/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.svelte",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: [
      {
        doom: {
          "primary": "#dc2626",
          "secondary": "#9ca3af",
          "accent": "#f59e0b",
          "neutral": "#1a1a1a",
          "base-100": "#0a0a0a",
          "base-200": "#171717",
          "base-300": "#262626",
          "info": "#6b7280",
          "success": "#16a34a",
          "warning": "#f59e0b",
          "error": "#dc2626",
        },
      },
      'dark',
      'cupcake',
    ],
  },
}
