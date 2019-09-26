const pages = ["index", "m/index", "about"];
module.exports = {
  // 生产环境禁用sourcemap
  productionSourceMap: false,
  // 多页面配置
  pages: pages.reduce((result, page) => {
    result[page] = {
      entry: `src/entries/${page}/main.js`,
      template: `template/${page}.html`,
      filename: `WEB-INF/${page}.htm`,
      chunks: ["chunk-vendors", "chunk-common", page]
    };
    return result;
  }, {}),
  publicPath: "/my-app/",
  chainWebpack: config => {
    pages.forEach(page => {
      config.plugin(`html-${page}`).tap(args => {
        args[0].minify = false;
        return args;
      });
    });
  }
};
