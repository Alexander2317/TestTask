/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-custom-properties')(),
    require('postcss-custom-media')(),
    require('postcss-media-minmax')(),
    require('postcss-custom-selectors')(),
    require('postcss-calc')(),
    require('postcss-nesting')(),
    require('postcss-nested')(),
    require('postcss-color-function')(),
    require('pleeease-filters')(),
    require('postcss-selector-matches')(),
    require('postcss-selector-not')(),
    require('postcss-flexbugs-fixes')(),
    require('postcss-simple-vars')(),
    require('postcss-mixins')(),
    require('autoprefixer')({
      flexbox: 'no-2009',
      grid: 'autoplace',
    }),
  ],
}
