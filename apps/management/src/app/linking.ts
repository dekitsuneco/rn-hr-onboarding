import { getStateFromPath, PathConfig } from '@react-navigation/native';
import { LinkingOptions } from '@react-navigation/native/lib/typescript/src/types';
import * as Linking from 'expo-linking';
import { AccountAccesNavigationParams } from './account-access/navigation';
import { MainNavigationParams } from './main/navigation';

type ScreenLinkingOptions = Parameters<typeof getStateFromPath>[1];
type ScreenRoutingOptions<T extends object> = {
  [key in keyof T]?: string | ScreenLinkingOptions | PathConfig<object>;
};

const appLink = Linking.createURL('/');

export const appLinking: LinkingOptions<object> = {
  prefixes: [appLink],
  config: {
    screens: {
      AccountAccess: {
        initialRouteName: 'AccountAccess',
        screens: <ScreenRoutingOptions<AccountAccesNavigationParams>>{
          Login: 'login',
          ForgotPassword: 'forgot-password',
          LinkSent: 'link-sent'
        }
      },
      Main: {
        initialRouteName: 'Main',
        screens: <ScreenRoutingOptions<MainNavigationParams>>{
          Dashboard: 'dashboard:',
          Employees: 'employees',
          Scripts: 'scripts',
          Settings: 'settings'
        }
      }
    }
  }
};
