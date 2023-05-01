module.exports = function ( api ) {
    api.cache( true )
    return {
        presets: [ 'babel-preset-expo' ],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: [ ".js", ".jsx", ".ts", ".tsx" ],
                    root: [ './src/' ],
                    alias: {
                        '@components': [ './src/components' ],
                        '@config': [ './src/config' ],
                        '@contexts': [ './src/contexts' ],
                        '@screens': [ './src/screens' ],
                        '@utils': [ './src/utils' ],
                        '@assets': [ './assets' ],
                    }
                }
            ]
        ]
    }
}
