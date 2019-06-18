/** @format */

module.exports = {
  // parser: "sugarss", is whitespace sensitive - will complain about unnecessary whitespace brackets
  plugins: {
    doiuse: {},
    "postcss-import": {}, // for inlining eg @import 'normalize.css';
    "postcss-discard-comments": {},
    // remove unused css
    "postcss-uncss": {
      html: ["index.html", "src/*.html"],
      ignore: [".fade"],
    },
    "css-mqpacker": { sort: true }, // combine media queries

    // convert modern CSS into something most browsers can understand,
    // determining the polyfills you need based on your targeted browsers
    // supports any standard browserslist configuration
    //  includes autoprefixer: {},
    "postcss-preset-env": {},

    // stylelint: {}, needs a configuration file. Actually I use prettier for html & css in VS
    //  eslint-plugin-compat i  stylelint-no-unsupported-browser-features sie marnuja

    cssnano: {},
  },
};
