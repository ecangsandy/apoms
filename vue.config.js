const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,   
  publicPath: process.env.NODE_ENV === 'production'
  ? '/apom/'
  : '/',
  pwa: {
    manifestOptions: {
      name: 'APOM',
      short_name: 'APOM',
      theme_color: '#f44647',
      background_color: '#f44647',
      display: 'standalone',
      orientation: 'landscape',
      icons: [
        {
          src: './icon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: './icon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: './icon/ms-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
      ]
    },
  }
});
