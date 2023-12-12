module.exports = {
  printWidth: 999, // 1行の最大文字数
  trailingComma: "all", // 末尾のカンマあり
  tabWidth: 2, // tab の長さは半角スペース 2 つ
  semi: false, // セミコロンなし
  singleQuote: true, // シングルクォーテーションに統一
  arrowParens: "always", // アロー関数の単一パラメータに括弧をつける
  endOfLine: "lf", // 改行の文字コードをLFに指定
  plugins: [require.resolve("prettier-plugin-astro")],
  jsxBracketSameLine: false,
  htmlWhitespaceSensitivity: 'ignore',
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
