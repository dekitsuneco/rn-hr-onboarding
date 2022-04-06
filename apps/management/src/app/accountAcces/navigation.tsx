import { ReactElement } from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type AccountAccesNavigationParams = {
  Login: undefined;
  ForgotPassword: undefined;
  LinkSent: undefined;
};

const Stack = createStackNavigator();

export function AccountAccesNavigation(): ReactElement {
  return (
    <View></View>
  )
}