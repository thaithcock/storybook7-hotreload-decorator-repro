const path = require('path')
const glob = require('glob')
const CopyPlugin = require('copy-webpack-plugin')

const entries = {}

glob.sync('src/**/*.ts', { realpath: true })
  .filter(filepath => !filepath.includes(".stories.ts") && !filepath.includes(".test.ts"))
  .forEach((filepath) => {
    const relativePath = path.parse(path.relative(path.resolve(__dirname, 'src'), filepath))
    entries[path.join(relativePath.dir, relativePath.name)] = filepath;
  })

module.exports = {
  mode: 'development',
  entry: entries,
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          },
        ],
        include: path.resolve(__dirname, 'src')
      },
    ]
  }
}
