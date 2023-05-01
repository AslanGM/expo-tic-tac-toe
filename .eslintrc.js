module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        // "prettier",
        // "prettier/@typescript-eslint",
        // "prettier/react"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "warn"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
