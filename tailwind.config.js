/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens: {
            xs: '540px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [],
};
