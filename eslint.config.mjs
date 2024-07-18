import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import * as pluginCss from "eslint-plugin-css"
import basic from "./rules/basic.js"
import globalVars from "./rules/globalVars.js"

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globalVars
            }
        }
    },
    pluginJs.configs.recommended,
    tseslint.configs.base,
    ...pluginVue.configs["flat/essential"],
    pluginCss.configs["flat/recommended"],
    basic
];