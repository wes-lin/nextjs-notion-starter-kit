module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "legacyDecorators": true,
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": ["**/*.js", "**/*.jsx"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "standard",
    "standard-react",
    "plugin:prettier/recommended"
  ],
  "env": { "browser": true, "node": true },
  "rules": {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-fragments": 0,
    "react/no-unused-prop-types": 0,
    "import/export": 0,
    "standard/no-callback-literal": 0
  }
}
