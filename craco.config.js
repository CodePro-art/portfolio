const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
          features: {
            'nesting-rules': true,
            'custom-media-queries': {
              importFrom: 'src/app/index.css',
            },
          },
        }),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      const miniCssExtractPluginIndex = webpackConfig.plugins.findIndex(
        (plugin) => plugin instanceof MiniCssExtractPlugin
      );

      if (miniCssExtractPluginIndex !== -1) {
        webpackConfig.plugins[miniCssExtractPluginIndex] = new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[name].chunk.css',
          ignoreOrder: true, // Ignore CSS order conflicts
        });
      }

      return webpackConfig;
    },
  },
};