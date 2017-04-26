const path = require( 'path' );
const base_path = path.resolve(__dirname, 'src');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'build.js'
    },
    devtool: 'source-map',
    resolve: {
        alias:{
            _components: path.join(base_path, 'components'),
            _services: path.join(base_path, 'services'),
            _vuex: path.join(base_path, 'vuex'),
            _npm: path.join(__dirname, 'node_modules'),
            _routes: path.join(base_path, 'routes'),
            _config: path.join(base_path, 'configs'),
            _sass: path.join(base_path, 'assets/sass'),
            'vue$': path.join(__dirname, 'node_modules', 'vue/dist/vue.common.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 4 versions', 'IE 10']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
