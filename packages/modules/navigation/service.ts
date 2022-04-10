import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<object>>();

class AppNavigationService {
  public get navigate(): NavigationContainerRef<any>['navigate'] {
    return navigationRef.current?.navigate;
  }

  public goBack(): void {
    navigationRef.current?.goBack();
  }

  public popScreen(): void {
    navigationRef.current?.dispatch;
  }
}

export const appNavigationService = new AppNavigationService();
