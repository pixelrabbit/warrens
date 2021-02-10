const path = require('path');

module.exports = ({ config }) => {

  //twig js loader
  config.module.rules.push({
    test: /\.twig$/,
    use: 'twigjs-loader',
});

  // set components alias
  config.resolve.alias = {
    '@library': path.resolve(__dirname, '../library'),
    '@foundation': path.resolve(__dirname, '../foundation'),
  }

  return config;
};