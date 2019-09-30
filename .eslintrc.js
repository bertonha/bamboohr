module.exports = {
    root: true,
    env: {
        browser: true,
        node: false
    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": "module",
    },
    extends: [
        'plugin:prettier/recommended',
    ],
    plugins: [
        'prettier',
    ],
    // add your custom rules here
    rules: {
    }
}
