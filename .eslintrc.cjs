module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "perfectionist"],
  rules: {
    "perfectionist/sort-array-includes": [
      "error",
      {
        type: "natural",
        order: "asc",
        "spread-last": true,
      },
    ],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      // Parse the `<script>` in `.svelte` as TypeScript
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
};