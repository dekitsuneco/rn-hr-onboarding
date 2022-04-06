import { NavigationContainerRef, Route } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<object>>();

class AppNavigationService {
  public get currentRoute(): Route<string> | undefined {
    return navigationRef.current?.getCurrentRoute();
  }

  public get canGoBack(): boolean {
    return navigationRef.current?.canGoBack();
  }

  public get navigate(): NavigationContainerRef<any>['navigate'] {
    return navigationRef.current?.navigate;
  }

}

export const appNavigationService = new AppNavigationService();
