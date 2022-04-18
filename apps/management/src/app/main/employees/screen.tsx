import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Search } from '@shared/search';
import { useTranslation } from 'utils/i18n';

export function EmployeesScreen(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES');

  return (
    <View style={style.container}>
      <Text style={style.text}>Employees</Text>
      <Search placeholder={translate('SEARCH_INPUT')} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 16
  },
  text: {
    fontSize: 25,
    color: '#26A0F8'
  }
});
