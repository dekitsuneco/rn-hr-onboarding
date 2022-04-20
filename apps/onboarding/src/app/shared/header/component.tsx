import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { commonStyle, createStyles, variables } from '@styles';
import { onboardingFacade } from '@app/main/onboarding/facade';
import { HeaderButton } from './components/button/component';

export function AppHeader(): ReactElement {
  const handlePress = (): void => {
    onboardingFacade.goBack();
  };

  return (
    <View style={[commonStyle.wrapper, style.container]}>
      <HeaderButton onPress={handlePress} iconName='arrowLeft' />
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
