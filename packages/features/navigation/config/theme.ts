import { DefaultTheme, Theme } from '@react-navigation/native';
import { variables } from 'ui-kit/styles';

export const navigationTheme = (colors: typeof variables.color): Theme => ({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background
  }
});
