/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Text"', '"Google Sans"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Google Sans Display"', '"Google Sans"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        flex: ['"Google Sans Flex"', '"Google Sans"', 'sans-serif'],
      },
      colors: {
        santara: {
          blue: '#00529C',     // Signature BRI Blue
          navy: '#002D62',     // Deep Bank BRI Navy
          cyan: '#0284C7',     // Vibrant Tech Cyan
          emerald: '#10B981',  // Food / Green Supply
          surface: '#F8FAFC',
        }
      }
    },
  },
  plugins: [],
}
