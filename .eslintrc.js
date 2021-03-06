module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        '@typescript-eslint/no-explicit-any':0,
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};