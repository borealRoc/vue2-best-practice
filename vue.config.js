const { defineConfig } = require('@vue/cli-service')

const port = 10086
const title = 'vue2项目最佳实践'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port,
  },
  configureWebpack: {
    name: title
  }
})
