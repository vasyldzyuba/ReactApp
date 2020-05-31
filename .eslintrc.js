module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
<<<<<<< HEAD
    'func-names': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': ['error', { object: true, array: true }],
    'consistent-return': 'off',
    'import/no-cycle': 'off',
=======
    "func-names": "off",
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "no-underscore-dangle": "off",
    "prefer-destructuring": ["error", { object: true, array: true }],
    "consistent-return": "off",
    "import/no-cycle": "off",
>>>>>>> 6ba1691201422796a94539e5259f1baee93825a5
  },
};
