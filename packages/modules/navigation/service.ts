import { NavigationContainerRef, StackActions, Route } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<object>>();

class AppNavigationService {
  public get currentRoute(): Route<string> | undefined {
    return navigationRef.current?.getCurrentRoute();
  }

  public get navigate(): NavigationContainerRef<any>['navigate'] {
    return navigationRef.current?.navigate;
  }

  public goBack(): void {
    navigationRef.current?.goBack();
  }

  public popToTop(): void {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }

  public canGoBack(): boolean {
    return navigationRef.current?.canGoBack();
  }
}

export const appNavigationService = new AppNavigationService();
