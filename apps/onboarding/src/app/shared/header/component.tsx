import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createStyles, variables } from '@styles';
import { HeaderButton } from './components/button/component';
import { appNavigationService } from 'features/navigation';

export type AppHeaderParams = {
  contentCenter?: JSX.Element;
  contentRight?: JSX.Element;
};

export function AppHeader({ contentCenter, contentRight }: AppHeaderParams): ReactElement {
  const { canGoBack, goBack } = appNavigationService;
  const handlePress = (): void => {
    goBack();
  };

  return (
    <View style={[style.container]}>
      <View style={style.column}>{canGoBack && <HeaderButton onPress={handlePress} iconName='arrowLeft' />}</View>
      <View style={[style.column, style.contentCenter]}>{contentCenter}</View>
      <View style={[style.column, style.contentRight]}>{contentRight}</View>
    </View>
  );
}

const style = createStyles({
  container: {
    height: 58,
    backgroundColor: variables.color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '1rem',
    borderBottomWidth: 1,
    borderColor: variables.color.backgroundTertiary
  },
  column: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0
  },
  contentCenter: {
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  contentRight: {
    alignItems: 'flex-end'
  }
});
