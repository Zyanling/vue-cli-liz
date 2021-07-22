module.exports = {
  assetsDir: './static',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 9000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:9000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
    // 开启本地服务可以绑定 host 域名
    disableHostCheck: true,
  },
}
