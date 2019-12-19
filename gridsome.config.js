// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssPlugins = [
    require('postcss-mixins'),
    require('autoprefixer'),
    require('postcss-nesting'),
    require('postcss-custom-media'),
    require('postcss-hexrgba'),
    require('postcss-automath')
]

module.exports = {
    siteName: 'khoipro',
		plugins: [],
		css: {
				loaderOptions: {
						postcss: {
								plugins: postcssPlugins,
						},
				},
		},
}
