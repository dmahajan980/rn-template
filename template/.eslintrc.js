module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
