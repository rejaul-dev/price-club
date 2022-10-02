/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#39bf5a",

          secondary: "#0656e0",

          accent: "#4b4fbc",

          neutral: "#312933",

          "base-100": "#FBFDFD",

          info: "#8AB6F0",

          success: "#26C5A5",

          warning: "#EDA93B",

          error: "#EA5D5D",
        },
      },
    ],
  },
  plugins: [],
};
