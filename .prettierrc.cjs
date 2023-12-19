module.exports = {
  printWidth: 1024, // 1行の最大文字数
  trailingComma: "all", // 末尾のカンマあり
  tabWidth: 2, // tab の長さは半角スペース 2 つ
  semi: false, // セミコロンなし
  singleQuote: true, // シングルクォーテーションに統一
  arrowParens: "always", // アロー関数の単一パラメータに括弧をつける
  endOfLine: "auto", // 改行の文字コードをLFに指定
  plugins: [require.resolve("prettier-plugin-astro")],
  jsxBracketSameLine: false,
  // htmlWhitespaceSensitivity: 'ignore',
  htmlWhitespaceSensitivity: "css",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  astroAllowShorthand: false
};
