module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    theme: {
      extend: {
        backgroundImage: {
          "hero-pattern": "url('/image/banner-bg.svg')",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
