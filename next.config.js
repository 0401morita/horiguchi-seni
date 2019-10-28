const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = withCSS(
  withSass({
    assetPrefix: isProd ? '/horiguchi-seni' : ''
  })
);
