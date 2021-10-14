module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      extend: {
        backgroundImage: {
          "hero-pattern": "url('/public/image/docs-page-banner-bg.svg)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
