module.exports = {
	plugins: {
		'postcss-nesting': {
			/* plugin options */
		},
		'@csstools/postcss-global-data': {
			files: ['src/lib/styles/custom-media-queries.css']
		},
		'postcss-preset-env': {
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		},
		autoprefixer: { grid: 'autoplace', flexbox: 'no-2009' },
		'postcss-csso': {
			/* plugin options */
		}
	}
};
