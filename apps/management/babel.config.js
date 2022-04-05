module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json'
          ],
          alias: {
            '@store': './src/app/shared/store',
            '@shared': './src/app/shared',
            '@styles': './src/styles',
            '@configurations': './src/configurations/configuration',
            '@assets': './src/assets',
            '@tests': './src/tests',
            '@app': './src/app'
          }
        }
      ]
    ]
  };
};
