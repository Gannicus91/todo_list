const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': path.join(__dirname, 'src/assets'),
        '@modules': path.join(__dirname, 'src/AppComponents'),
        '@images': path.join(__dirname, 'src/assets/images'),
        '@': path.join(__dirname, 'src/'),
      },
    },
  },


  css: {
    loaderOptions: {
      'stylus': {
        import: '~assets/styl/_global.styl',
      },
    },
  },

  chainWebpack: config => {
    // удаляем prefetch плагин:
    config.plugins.delete('prefetch');
  },
};
