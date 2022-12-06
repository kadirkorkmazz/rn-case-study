module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'prettier/prettier': [
          'error',
          {},
          {
            bracketSpacing: true,
            singleQuote: true,
            trailingComma: 'all',
          },
        ],
      },
    },
  ],
};
