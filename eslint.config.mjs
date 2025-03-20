export default {
  extends: ['react-app', 'react-app/jest'],
  ignorePatterns: [
    'build/*',
    'node_modules/*',
    'coverage/*',
    'public/*',
    'eslint.config.mjs',
    'prettier.config.mjs',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'no-console': 0,
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
