module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: ["airbnb-base", "airbnb-typescript/base"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-dupe-class-members": ["error"],
      "@typescript-eslint/no-useless-constructor": ["error"],
      "@typescript-eslint/no-inferrable-types": ["off"],

      "import/extensions": [
        "error",
        "ignorePackages",
        { js: "always", jsx: "never", ts: "never", tsx: "never" },
      ],
    },
};
