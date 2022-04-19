import { variables, createStyles } from '@styles';
import React, { ReactElement } from 'react';
import { ImageBackground, View } from 'react-native';
import { commonStyle } from 'ui-kit/styles';

interface AccountAccessLayoutProps {
  children?: React.ReactNode;
}

export function AccountAccessLayout({ children }: AccountAccessLayoutProps): ReactElement {
  return (
    <View style={{ flex: 1 }}>
      <View style={style.backgroundContainer}>
        <ImageBackground
          source={require('@assets/images/background.png')}
          resizeMode='cover'
          style={style.backgroundImage}
        />
      </View>
      <View style={[commonStyle.container, style.content]}>{children}</View>
    </View>
  );
}

const style = createStyles({
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    height: '100%',
    backgroundColor: variables.color.white,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 600
  },
  '@media (max-width: 768)': {
    content: {
      maxWidth: '100%'
    }
  }
});
