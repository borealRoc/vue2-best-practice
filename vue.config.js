const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const port = 10086
const title = 'vue2项目最佳实践'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port,
  },
  configureWebpack: {
    name: title
  },
  chainWebpack(config) {
    // 配置项目原本svg规则排除自定义的“src/icons”目录下的svg文件
    // {
    //   test: /\.(svg)(\?.*)?$/,
    //   type: 'asset/resource',
    //   generator: {
    //     filename: 'img/[name].[hash:8][ext]'
    //   }
    // }
    config.module.rule('svg').exclude.add(resolve("src/icons"))
    // 新增 icons 规则，设置 svg-sprite-loader 处理 icons 目录中的 svg 图标
    config.module.rule('icons').test(/\.svg$/).include.add(resolve("src/icons")).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' })
  }
})
