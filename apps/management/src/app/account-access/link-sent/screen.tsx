import React, { ReactElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { linkSentScreenFacade } from './facade';

export function LinkSentScreen(): ReactElement {
  const handleBackPress = (): void => {
    linkSentScreenFacade.navigateToLogin();
  };

  return (
    <AccountAccessLayout>
      <View style={style.container}>
        <Text style={{ marginBottom: 50 }}>Done! We’ve sent you the password recovery link.</Text>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={style.link}>Back to Sign In</Text>
        </TouchableOpacity>
      </View>
    </AccountAccessLayout>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    color: '#26A0F8',
    fontSize: 15
  }
});
