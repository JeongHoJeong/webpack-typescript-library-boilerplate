const path = require('path')

const nodeExternals = require('webpack-node-externals')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      index: path.resolve(__dirname, 'src/index.ts')
    },
    target: 'node',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
      path: path.resolve(__dirname, '.build'),
      filename: '[name].js',
      library: 'mylib',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          /*
          `ttypescript` is used for resolution of module aliases in *.d.ts files. (`paths` in `tsconfig.json`)
          Without `@zerollup/ts-transform-paths`, *.d.ts files will have import paths untransformed like `@/my-class`,
          which is not valid for the consumers of it.
          */
          options: {
            compiler: 'ttypescript',
          },
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
    externals: [nodeExternals()],
  }
}
