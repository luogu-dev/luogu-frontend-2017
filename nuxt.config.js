module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Luogu vNext',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Luogu vNext' }
    ],
    script: [
      // { src: '//unpkg.cnpmjs.org/jquery/dist/jquery.min.js' },
      // { src: '//unpkg.cnpmjs.org/uikit/dist/js/uikit.min.js', defer: true },
      // { src: '//unpkg.cnpmjs.org/uikit/dist/js/uikit-icons.min.js', defer: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '//luogu.oss-cn-hangzhou.aliyuncs.com/images/favicon3.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/uikit', ssr: false }
  ],
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
