/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'cursive': ['var(--font-cursive)'],
            },
            screens: {
                'xsm': '450px',
                'xmd': '600px',
                'xlg': '900px',
            },
        },
    },
    plugins: [],
}
