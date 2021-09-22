// customizing Tailwind css
// You can add evertyhing outside the default configuration from tailwind.js
// Good Luck!

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
        lookPrimary: "#6DCFF6",
        lookSecondary: "#FFFFFF",
        lookBorder: "#E5E5EA",
        look3: "#FFAEBC",
      },
      fontFamily: {
        fairly: ["Fairly Display"],
        mulish: ["Mulish"],
        poppins: ["Poppins"],
      },
    },
  },
  variants: {},
  plugins: {},
};
