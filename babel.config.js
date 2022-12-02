export const presets = ['module:metro-react-native-babel-preset'];
export const plugins = [
  [
    'module:react-native-dotenv',
    {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
      safe: false,
      allowUndefined: true,
      verbose: false,
    },
  ],
];
