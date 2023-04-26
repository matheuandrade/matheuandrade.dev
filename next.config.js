const withSvgr = require('next-svgr')

module.exports = withSvgr({
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en', 'pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
  },
})
