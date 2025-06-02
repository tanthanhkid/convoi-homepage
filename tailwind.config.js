/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#059669',
        'primary-green-dark': '#047857',
        'primary-green-light': '#10b981',
        'accent-blue': '#1e40af',
        'accent-orange': '#ea580c',
        'text-dark': '#1f2937',
        'text-light': '#6b7280',
        'background-light': '#f0fdf4',
        'green-50': '#f0fdf4',
        'green-100': '#dcfce7',
        'green-500': '#22c55e',
        'green-600': '#16a34a',
        'green-700': '#15803d',
        'green-800': '#166534',
      },
    },
  },
  plugins: [],
}

