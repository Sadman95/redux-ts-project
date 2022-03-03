const palette = ["#304D63", "#B2E7E8", "#8FB9AA", "#F2D096", "#ED8975"];

module.exports = {
  content: ["./index.html", "./src/**/*.{html, js, jsx, ts, tsx}"],
  theme: {
    colors: {
      brand: palette[palette.length - 1],
      primary: {
        dark: palette[0],
        default: palette[2],
        light: palette[1],
      },
      secondary: palette[3],
    },
    extend: {},
  },
  plugins: [],
};
