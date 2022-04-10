import React, { ReactElement } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

interface AccountAccessLayoutProps {
  children: React.ReactNode;
}

export function AccountAccessLayout({ children }: AccountAccessLayoutProps): ReactElement {
  const windowWidth = useWindowDimensions().width;
  const maxWidth = windowWidth > 768 ? 600 : windowWidth;

  return (
    <View style={style.container}>
      <View style={style.backgroundContainer}>
        <ImageBackground
          source={require('@assets/images/background.png')}
          resizeMode='cover'
          style={style.backgroundImage}
        />
      </View>
      <View style={[style.content, { maxWidth }]}>{children}</View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
