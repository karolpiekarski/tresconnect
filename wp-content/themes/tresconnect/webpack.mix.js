/* ---
  Docs: https://www.npmjs.com/package/mati-mix/
--- */
const mix = require('mati-mix');

mix.js([
  '_dev/js/vendors/polyfills/**/*.js',
  '_dev/js/vendors/helpers/*.js',
  '_dev/js/classes/Core.js',
], 'public/build/js/scripts.js');

mix.sass(
  '_dev/scss/core.scss'
, 'public/build/css/styles.css');

/* ---
  Config
--- */
mix
  // .sassMobileFirst()
  // .aliases({
  //   'class': __dirname + '/_dev/js/classes',
  // })
  .browserSync('http://grandproject.test/', [
    './public/build/css/styles.css',
  ])
  // .version()
;