// @ts-check

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ['{src,tests}/*.{js,ts}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
  ],
  rules: {
    "semi": ["error", "always"],
    "indent": ["error", 2]
  }
});