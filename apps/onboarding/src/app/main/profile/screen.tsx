import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { profileFacade } from './facade';

export function ProfileScreen(): JSX.Element {
  useEffect(() => {
    profileFacade.init();
  }, []);

  return (
    <View style={style.screen}>
      <AppButton
        onPress={() => {
          profileFacade.unauthorize();
        }}
        title='Logout'
      />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  }
});
