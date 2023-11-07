/** @type {import('tailwindcss').Configuration} */
export default {
  corePlugins: {
    preflight: false,
  },
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        80: "80px",
      },
      keyframes: {
        headerslide: {
          "0%": { transform: "translate-x-[-100%]" },
          "100%": { transform: "translate-x-full" },
        },
      },
      animation: {
        wiggle: "headerslide 3s ease-in-out",
      },
      spacing: {
        45: "11.5rem", // Add your custom margin value here
      },
      width: {
        200: "3200px", // Add your custom width value
      },
    },
  },
  plugins: [],
};
