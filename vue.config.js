const fs = require('fs');

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devServer: {
      https: {
        key: fs.readFileSync('./server.key'),
        cert: fs.readFileSync('./server.cert'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import 'src/assets/scss/main.scss';
        `
      }
    }
  },
};