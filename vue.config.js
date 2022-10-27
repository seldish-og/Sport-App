const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.rules = {
  test: /\.pug$/,
  loader: 'pug-plain-loader'
}
