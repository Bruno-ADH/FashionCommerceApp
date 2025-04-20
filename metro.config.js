// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // 👇 Exclure .svg des assets
  config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
  // 👇 Ajouter .svg comme source
  config.resolver.sourceExts.push('svg');
  // 👇 Lien vers le transformer
  config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

  return config;
})();
