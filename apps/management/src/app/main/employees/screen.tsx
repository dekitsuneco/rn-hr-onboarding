import React, { ReactElement } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { appNavigationService } from 'features/navigation';

export function EmployeesListScreen(): ReactElement {
  return (
    <View style={style.container}>
      <Text style={style.text}>Employees</Text>
      <Button
        title='Edit'
        onPress={() => {
          appNavigationService.navigate('EditEmployee');
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: '#26A0F8'
  }
});
