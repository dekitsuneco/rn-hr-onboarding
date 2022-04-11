import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { onboardingFacade } from './facade';

export function OnboardingScreen(): JSX.Element {
  useEffect(() => {
    onboardingFacade.init();
  }, []);

  const navigation = useNavigation();

  const handleOnboardingBtn = (): void => {
    navigation.navigate('AccountAccess');
  };

  return (
    <View style={style.screen}>
      <Text style={style.text}>Onboarding Screen</Text>
      <Button title='Go to Account Access screen' onPress={handleOnboardingBtn} />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    marginBottom: 15
  }
});