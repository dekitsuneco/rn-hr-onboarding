import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { commonStyle, createStyles, variables } from '@styles';
import { Icon } from 'ui-kit/icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { onboardingFacade } from '@app/main/onboarding/facade';

export function ScriptsHeader(): ReactElement {
  const handlePress = (): void => {
    onboardingFacade.goBack();
  };

  return (
    <View style={[commonStyle.wrapper, style.container]}>
      <TouchableOpacity style={style.iconContainer} onPress={handlePress}>
        <Icon name='arrowLeft' />
      </TouchableOpacity>
    </View>
  );
}

const style = createStyles({
  container: {
    height: 58,
    backgroundColor: variables.color.white,
    justifyContent: 'center'
  },
  iconContainer: {
    paddingVertical: 6
  }
});
