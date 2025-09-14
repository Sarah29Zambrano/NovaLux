const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");

const {
    fixupConfigRules,
    fixupPluginRules,
} = require("@eslint/compat");

const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const prettier = require("eslint-plugin-prettier");
const _import = require("eslint-plugin-import");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.commonjs,
        },

        ecmaVersion: 12,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    extends: fixupConfigRules(compat.extends(
        "standard",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    )),

    plugins: {
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        prettier: fixupPluginRules(prettier),
        import: fixupPluginRules(_import),
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/prop-types": ["off", {}],
        "react/self-closing-comp": "warn",
        "react-hooks/rules-of-hooks": "warn",

        "react/jsx-sort-props": ["warn", {
            callbacksLast: true,
            shorthandFirst: true,
            noSortAlphabetically: false,
            reservedFirst: true,
        }],

        "react/display-name": ["off", "always"],
        "react/react-in-jsx-scope": ["off", "always"],
        "react/jsx-no-useless-fragment": "warn",

        "import/order": ["warn", {
            "newlines-between": "always",
        }],

        quotes: ["warn", "double"],
        semi: ["warn", "always"],
        "comma-dangle": ["warn", "always-multiline"],
        "no-console": "warn",

        "prettier/prettier": ["warn", {
            singleQuote: false,
            traillingComma: "all",
            semi: true,
            tabWidth: 2,
            printWidth: 100,
            bracketSpacing: true,
            arrowParens: "always",
            endOfLine: "auto",
        }],

        "no-unused-vars": ["warn", {
            args: "after-used",
            ignoreRestSiblings: false,
            argsIgnorePattern: "^_.*?$",
            varsIgnorePattern: "^_",
        }],

        "padding-line-between-statements": ["warn", {
            blankLine: "always",
            prev: "*",
            next: "return",
        }, {
            blankLine: "always",
            prev: ["const", "let", "var"],
            next: "*",
        }, {
            blankLine: "any",
            prev: ["const", "let", "var"],
            next: ["const", "let", "var"],
        }],

        "no-debugger": "warn",
        "no-undef": "off",
    },
}, globalIgnores(["**/node_modules", "**/build", "**/public", "**/__snapshots__"])]);