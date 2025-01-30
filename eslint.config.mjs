import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
        'quotes': ['error', 'single'],
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-explicit-any' : 'off',
    }
  }),
]

export default eslintConfig
