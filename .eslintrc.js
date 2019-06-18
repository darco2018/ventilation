//Languages that require compilers have a way to give feedback to developers before code is executed. Since JavaScript
//doesn't equire a compiler, linters are needed to play that role.
// Running eslint --fix file-path from a terminal/command-line modifies a file in-place.
//ESLint searches upward from current directory for these files. It combines settings in all of the configuration files found with //settings in the closest files taking precedence. A configuration file in the home directory is only used if no other configuration //files are found.

// If there is an .eslintrc and a package.json file found in the same directory, .eslintrc will take a priority and package.json
//  file will not be used.

// Typically, it is desirable to only run ESLint on .js files.

//To skip fixes for a certain rule:
//eslint --fix --rule 'some-rule: off' some-file.js
//To skip fixes for multiple rules, specify the --rule option multiple times.

module.exports = {
    "extends": [
      "airbnb",
      "prettier",
      "prettier/react"
    ],
    // By default, ESLint uses the Espree parser
    "parser": "babel-eslint",
    //parserOptions are  for the default parser and are not necessarily supported by babel-eslint.
    // when using a custom parser, the parserOptions configuration property is still required for ESLint to work properly with
    //  features not in ECMAScript 5 by default. Parsers are all passed parserOptions and may or may not use them to determine which //features to enable.
    "parserOptions": {
      // specify the version of ECMAScript syntax you want to use. By default, ESLint expects ECMAScript 5 syntax.(2009)
      "ecmaVersion": 2018,
      "sourceType": "module", // strict mode, top-level vars local to module, top-level this = undefined, can use import
      "ecmaFeatures": {
        "impliedStrict": true, // enable global strict mode (if ecmaVersion is 5 or greater)
        "classes": true
      }
    },
    "env": {
      // These environments are not mutually exclusive, so you can define more than one at a time.
      // "commonjs" - CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
      "browser": true, //  browser global variables.
      "es6": true, // enable all ECMAScript 6 features except for modules (this  sets the ecmaVersion parser option to 6).
      "node": true, // Node.js global variables
      "jquery": true,
      "mocha": true
    },
    "rules": {
      "no-debugger": 0,
      "no-alert": 0,
      "no-console": 0,
      "prefer-template": 0,
      "max-len": 0,
      "padded-blocks": 0,
      "no-trailing-spaces": 0,
      "no-multiple-empty-lines": 0,
      "prettier/prettier": [
        "error",
        {
          "trailingComma": "es5",
          "singleQuote": false,
          "printWidth": 80,
          "insertPragma": true
        }
      ],

    },
    "plugins": [
      "mocha",
      "html",
      "prettier",
      "react-hooks"
    ]
  }

  /^babel-eslint requires Babel as a peer dependency and expects a valid Babel configuration file to exist. This ensures that the same Babel configuration is used during both linting and compilation.*/
