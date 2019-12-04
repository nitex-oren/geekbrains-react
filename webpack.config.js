const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve (__dirname, 'static_src'),
    output: {
        path: path.resolve(__dirname,'static', 'build'),
        filename: 'app.js',
    },
<<<<<<< HEAD
    watch: process.argv[process.argv.length - 1] === 'development',
=======
>>>>>>> 3d1e054a0d3f9016bee31c803744b98a0e9058ef
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve (__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
<<<<<<< HEAD
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]
                }
 
            },
        ],
    },
    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
     },
 
=======
                },
            },
        ],
    },
>>>>>>> 3d1e054a0d3f9016bee31c803744b98a0e9058ef
};

