/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-[#fe99a9]",
    "bg-[#eae1ca]",
    "ring-[#fe99a9]",
    "font-sf",
    "text-white",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ['"SF Pro Rounded"', 'sans-serif'],
      },
      padding: {
        safe: "env(safe-area-inset-top)", // 👈 нужно для pt-safe
      },
    },
  },
  plugins: [],
};
