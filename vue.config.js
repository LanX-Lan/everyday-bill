// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const dir = path.resolve(__dirname, 'src/assets/icons')

module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    config.module.rules.delete('svg') //重点:删除默认配置中处理svg,
    //const svgRule = config.module.rule('svg')
    //svgRule.uses.clear()
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(dir) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        extract: false
      }).end()
  }
}
