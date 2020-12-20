module.exports = {
    extends: ['eslint:recommended'], // extending recommended config and config derived from eslint-config-prettier
    plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
    parser: 'babel-eslint',
    rules: {
        'prettier/prettier': [
            // customizing prettier rules (unfortunately not many of them are customizable)
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                useTabs: false,
                tabWidth: 4
            }
        ],
        'no-constant-condition': 2, // disallow use of constant expressions in conditions
        'no-control-regex': 2, // disallow control characters in regular expressions
        'no-dupe-args': 2, // disallow duplicate arguments in functions
        'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
        'no-duplicate-case': 2, // disallow a duplicate case label.
        'no-empty': 2, // disallow empty statements
        'no-ex-assign': 2, // disallow assigning to the exception in a catch block
        'no-extra-boolean-cast': 2, // disallow double-negation boolean casts in a boolean context
        'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
        'no-extra-semi': 2, // disallow unnecessary semicolons
        'no-func-assign': 2, // disallow overwriting functions written as function declarations
        'no-inner-declarations': 2, // disallow function or variable declarations in nested blocks
        'no-invalid-regexp': 2, // disallow invalid regular expression strings in the RegExp constructor
        'no-irregular-whitespace': 2, // disallow irregular whitespace outside of strings and comments
        'no-regex-spaces': 2, // disallow multiple spaces in a regular expression literal
        'no-sparse-arrays': 2, // disallow sparse arrays
        'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
        'use-isnan': 2, // disallow comparisons with the value NaN
        'no-undef': 0 // Turn off undefined errors
    },
    parserOptions: {
        ecmaVersion: 6
    },

    env: {
        es6: true,
        node: true
    }
};
