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
    '@components': path.resolve(__dirname, '../components'),
    '@foundation': path.resolve(__dirname, '../components/foundation')
  }

  

  return config;
};