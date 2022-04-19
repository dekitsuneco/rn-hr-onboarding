import { DrawerHeaderProps } from '@react-navigation/drawer';
import { StackHeaderProps } from '@react-navigation/stack';
import { commonStyle, createStyles, variables } from '@styles';
import React from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { AnyStyle } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';

export type AppHeaderProps = {
  titleContent?: string | JSX.Element;
  rightContent?: JSX.Element;
  isDrawerToggleHidden?: boolean;
} & Partial<Pick<StackHeaderProps | DrawerHeaderProps, 'navigation' | 'options'>>;

export function AppHeader({
  rightContent,
  options,
  navigation,
  isDrawerToggleHidden,
  ...restProps
}: AppHeaderProps): JSX.Element {
  const titleContent = restProps.titleContent || options?.title;

  const navBtn = navigation.canGoBack() ? (
    <AppButton
      leftIcon={<Icon name='arrowLeft' />}
      theme='tertiary'
      onPress={() => navigation.goBack()} />
  ) : !isDrawerToggleHidden ? (
    <AppButton
      leftIcon={<Icon name='menu' />}
      theme='tertiary'
      onPress={() => 'toggleDrawer' in navigation && navigation.toggleDrawer()}
    />
  ) : null;

  const title =
    typeof titleContent === 'string' ? <AppText theme={TextTheme.LARGEST}>{titleContent}</AppText> : titleContent;

  return (
    <View style={style.container}>
      <View style={[commonStyle.flexCenter, style.navbarContainer]}>
        <View style={[style.navbar]}>{navBtn}</View>
        <View style={style.title}>{title}</View>
      </View>
      <View style={style.actionsContainer}>{rightContent}</View>
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 80,
    paddingVertical: 10,
    maxHeight: 130,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: variables.color.borderColorSecondary
  },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionsContainer: {
    flexDirection: 'row'
  },
  subtitle: {
    color: variables.color.textTertiary,
    margin: 22
  },
  [`@media (max-width: ${variables.breakpoints.tablet})`]: {
    container: {
      maxHeight: 60,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginHorizontal: 0
    },
    navbar: {
      marginRight: 10
    }
  } as AnyStyle
});
