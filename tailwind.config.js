/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#005f99",
                "primary-dark": "#004a7a",
                secondary: "#fbc02d",
                "secondary-dark": "#c49000",
            },
        },
    },
    plugins: [],
}
