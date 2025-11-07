/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
                extend: {
                        fontFamily: {
                                'roboto': ['Roboto', 'sans-serif'],
                                'nunito': ["'Nunito'", 'sans-serif'],
                        },
                        colors: {
                                brand: {
                                        vivid: '#3778FF',
                                        soft: '#C4D5FF',
                                        pale: '#E0EBFF',
                                        bold: '#0F4FD8',
                                        navy: '#0B3B99',
                                },
                        },
                },
        },
	plugins: [],
}
