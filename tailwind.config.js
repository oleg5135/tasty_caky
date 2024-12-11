module.exports = {
  important: true,
  prefix: 'tw-',
  mode: 'jit', // Переконатися, що JIT увімкнено
  content: ["./**/*.html"], // Переконайтесь, що вказані HTML-файли
  theme: {
    screens: {
      lg: { max: "1199.99px" },
      md: { max: "991.99px" },
      sm: { max: "767.99px" },
      xs: { max: "479.99px" },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'header-bg': "url('src/assets/bg.png')",
      },
      colors: {
        blueviolet: "#502B75",
        lightgray: "#666768",
      },
    },
  },
  plugins: [],
};
