// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.
      // eslint-disable-next-line no-undef
      require.resolve('expo-router/babel'),
    ],
  };
};