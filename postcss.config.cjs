module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': 'postcss-nesting',
		tailwindcss: {},
		autoprefixer: { grid: 'autoplace', flexbox: 'no-2009' },
	}
};
