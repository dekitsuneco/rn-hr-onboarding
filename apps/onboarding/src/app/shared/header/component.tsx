import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { commonStyle, createStyles, variables } from '@styles';
import { HeaderButton } from './components/button/component';
import { appFacade } from '@app/facade';

export function AppHeader(): ReactElement {
  const { canGoBack, goBack } = appFacade;
  const handlePress = (): void => {
    goBack();
  };

  return (
    <View style={[commonStyle.wrapper, style.container]}>
      {canGoBack && <HeaderButton onPress={handlePress} iconName='arrowLeft' />}
    </View>
  );
}

const style = createStyles({
  container: {
    height: 58,
    backgroundColor: variables.color.white,
    justifyContent: 'center'
  }
});
