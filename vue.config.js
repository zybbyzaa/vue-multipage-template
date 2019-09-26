module.exports = {
  // 生产环境禁用sourcemap
  productionSourceMap: false,
  // 多页面配置
  pages: {
    index: {
      entry: "src/entries/index/main.js",
      template: "template/index.html",
      filename: "WEB-INF/index.htm",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    about: {
      entry: "src/entries/about/main.js",
      template: "template/about.html",
      filename: "WEB-INF/about.htm",
      chunks: ["chunk-vendors", "chunk-common", "about"]
    }
  },
  publicPath: "/my-app/",
  chainWebpack: config => {
    config.plugin("html-index").tap(args => {
      args[0].minify = false;
      return args;
    });
    config.plugin("html-about").tap(args => {
      args[0].minify = false;
      return args;
    });
  }
};
