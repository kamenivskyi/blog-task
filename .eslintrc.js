module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}

// module.exports = {
//   root: true, // Make sure eslint picks up the config at the root of the directory
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2020, // Use the latest ecmascript standard
//     sourceType: 'module', // Allows using import/export statements
//     ecmaFeatures: {
//       jsx: true, // Enable JSX since we're using React
//     },
//   },
//   settings: {
//     react: {
//       version: 'detect', // Automatically detect the react version
//     },
//   },
//   env: {
//     browser: true, // Enables browser globals like window and document
//     amd: true, // Enables require() and define() as global variables as per the amd spec.
//     node: true, // Enables Node.js global variables and Node.js scoping.
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'prettier/@typescript-eslint',
//   ],
//   rules: {
//     'prettier/prettier': ['error', {}, { usePrettierrc: true }],
//     'react/react-in-jsx-scope': 'off',
//     'react/prop-types': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     'simple-import-sort/sort': 'error',
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       {
//         components: ['Link'],
//         specialLink: ['hrefLeft', 'hrefRight'],
//         aspects: ['invalidHref', 'preferButton'],
//       },
//     ],
//   },
// }
