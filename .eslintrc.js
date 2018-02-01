module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "meteor": true,
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/require-default-props": [0],
    "comma-dangle": [0],
    "import/no-extraneous-dependencies": [0],
    "import/no-unresolved": [0],
    "react/jsx-filename-extension": [0],
    "object-curly-newline": [0],
    "function-paren-newline": [0],
    "react/jsx-wrap-multilines": [0],
    "import/extensions": [2, "never"],
    "react/forbid-prop-types": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "react/no-array-index-key": [0],
    "no-shadow": [0],
    "no-confusing-arrow": [0],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-restricted-syntax": 0,
    "no-nested-ternary": 0,
    "camelcase": 0
  }
};