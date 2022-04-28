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
  isDrawerToggleHidden = true,
  ...restProps
}: AppHeaderProps): JSX.Element {
  const titleContent = restProps.titleContent || options?.title;

  const navBtn =
    !isDrawerToggleHidden && 'toggleDrawer' in navigation ? (
      <AppButton
        isTextHidden={true}
        leftIcon={<Icon name='menu' />}
        theme='tertiary'
        onPress={() => navigation.toggleDrawer()}
      />
    ) : navigation.canGoBack() ? (
      <AppButton
        isTextHidden={true}
        leftIcon={<Icon name='arrowLeft' />}
        theme='tertiary'
        onPress={() => navigation.goBack()}
      />
    ) : null;

  const title =
    typeof titleContent === 'string' ? <AppText theme={TextTheme.LARGEST}>{titleContent}</AppText> : titleContent;

  return (
    <View style={[commonStyle.wrapper, style.container]}>
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
    paddingVertical: 10,
    maxHeight: 100,
    borderBottomWidth: 1,
    backgroundColor: variables.color.background,
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
  [`@media (max-width: ${variables.breakpoints.tablet})`]: {
    container: {
      maxHeight: 60,
      paddingVertical: 8,
      marginHorizontal: 0
    },
    navbar: {
      marginRight: 10
    }
  } as AnyStyle
});
