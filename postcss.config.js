const config = {
    plugins: [
        require('postcss-mixins'),
        require('autoprefixer'),
        require('postcss-nesting'),
        require('postcss-hexrgba'),
        require('postcss-automath'),
        require('postcss-critical-split')({
            'output': process.env.ENV === 'production' ? 'rest' : 'input',
            'startTag': 'defer:start',
            'endTag': 'defer:end',
            'blockTag': 'defer'
        })
    ]
}

module.exports = config
