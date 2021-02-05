const path = require('path');

module.exports = ({ config }) => {

  // Twig:
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
      },
    ],
  });

  // set components alias
  config.resolve.alias = {
    '@library': path.resolve(__dirname, '../library'),
    '@components': path.resolve(__dirname, '../components')
  }

  

  return config;
};