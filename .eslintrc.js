module.exports = {
 env: {
  browser: true,
  commonjs: true,
  es6: true,
  node: true,
  "jest/globals": true,
 },
 extends: [
  "eslint:recommended",
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:@typescript-eslint/recommended-requiring-type-checking",
  "prettier",
  "prettier/@typescript-eslint",
  "prettier/react",
  "plugin:jest/recommended",
  "plugin:react/recommended",
  "plugin:jsx-a11y/recommended",
 ],
 parser: "@typescript-eslint/parser",
 plugins: ["@typescript-eslint", "react", "jest", "react-hooks", "prettier"],
 parserOptions: {
  ecmaVersion: 2018,
  project: "./tsconfig.json",
  sourceType: "module",
  ecmaFeatures: {
   jsx: true,
  },
 },
 rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/explicit-function-return-type": [
   "off",
   "always",
   { allowExpressions: true },
  ],
    "no-console": ["off", "always"],
    "react/prop-types": "off",
 },
 settings: {
  react: {
   version: "detect",
  },
 },
}