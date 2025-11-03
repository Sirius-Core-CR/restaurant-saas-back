// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",       
      globals: {
        ...globals.node,           
        ...globals.jest            
      }
    },
    rules: {
    },
    ignores: ["dist/**", "node_modules/**"]
  }
];
