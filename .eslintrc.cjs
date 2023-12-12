module.exports = {
  extends: ["plugin:astro/recommended", "prettier"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      rules: {
      },
    },
    // ...
  ],
};
