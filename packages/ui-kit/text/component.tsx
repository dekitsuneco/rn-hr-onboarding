import { createStyles, variables } from '../styles';
import React, { ReactElement } from 'react';
import { Text, TextProps } from 'react-native';
import { TextTheme } from './enums';

interface AppTextProps extends TextProps {
  children?: React.ReactNode;
  theme?: TextTheme;
}

export function AppText({ style: elementStyle = {}, theme, children, ...restProps }: AppTextProps): ReactElement {
  return (
    <Text style={[style.common, theme && style[theme], elementStyle]} {...restProps}>
      {children}
    </Text>
  );
}

export const style = createStyles({
  common: {
    fontSize: variables.fontSize.small,
    color: variables.color.textPrimary,
    fontFamily: variables.fontFamily.sfProTextRegular,
    lineHeight: '1.84rem'
  },
  textSmallest: {
    fontSize: variables.fontSize.smallest,
    lineHeight: '1.38rem'
  },
  textSmall: {
    fontSize: variables.fontSize.small
  },
  textMedium: {
    fontSize: variables.fontSize.medium,
    lineHeight: '1.54rem'
  },
  textLarger: {
    fontSize: variables.fontSize.larger,
    lineHeight: '1.54rem',
    fontFamily: variables.fontFamily.sfProDisplayRegular
  },
  textLarge: {
    fontSize: variables.fontSize.large,
    fontFamily: variables.fontFamily.sfProDisplayBold,
    lineHeight: '2.46rem'
  },
  textLargest: {
    fontSize: variables.fontSize.largest,
    fontFamily: variables.fontFamily.sfProDisplayBold,
    lineHeight: '2.46rem'
  }
});
