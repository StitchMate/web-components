const fontSize = require('tailwindcss/defaultTheme').fontSize;

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    fontSize: Object.assign(fontSize, {
      base: ['var(--seam-text-base)', '1.25rem']
    })
  }
};
