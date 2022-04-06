# HR Onboarding & Management - React Native apps

Monorepository for HR Onboarding and HR Management apps.

## Development

1. Setup [Expo](https://docs.expo.io/get-started/installation/#installing-expo-cli)
1. Setup dependencies: `yarn install`
1. Navigate to the app directory in [/apps](/apps/) and run: `yarn start`
1. Open your app using [Expo Client](https://docs.expo.io/get-started/installation/#2-mobile-app-expo-client-for-ios)

## Useful scripts

See `package.json` in apps directories for app-specific scripts. You can run them using `yarn {script}`:

- Run using Expo: `start`
- Lint code: `lint`
- Format code: `format`
- Run tests: `test`
- Build for Android: `build:android:{environment}`
- Build for iOS: `build:ios:{environment}`
- Submit iOS build to AppStore Connect: `submit:ios:{environment}`
- Publish OTA-update: `publish:{environment}`
