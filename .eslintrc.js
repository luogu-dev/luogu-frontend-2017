module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'vuefix',
    'html'
  ],
  // add your custom rules here
  rules: {
    'html-no-self-closing': 'off'
  },
  globals: {}
}
