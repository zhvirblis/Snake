/* global module */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "space-infix-ops": "error"
    }
};
