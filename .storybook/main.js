const { resolve } = require('path')

const CSS_IMPORT = `
@use '~/styles/storybook/' as *;
`

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  // staticDirs: ['../public'],
  staticDirs: ['../src'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@whitespace/storybook-addon-html',
    // '@storybook/addon-viewport',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '~': resolve(__dirname, '../src'),
      '@': resolve(__dirname, '../public'),
    }
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              indentWidth: 2,
              fiber: false,
            },
            additionalData: async (content) => {
              return CSS_IMPORT + content
            },
          },
        },
      ],
    })
    return config
  },
}
