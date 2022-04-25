import { createStyles } from '@styles';
import { useFormik } from 'formik';
import React, { ReactElement } from 'react';
import { View, ScrollView } from 'react-native';
import { EmployeeForm } from './shared/forms/employee';

export function NewEmployeeScreen(): ReactElement {
  const handleSubmitFrom = (values: EmployeeForm): void => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: new EmployeeForm(),
    onSubmit: handleSubmitFrom
  });

  return (
    <ScrollView style={style.container}>
      <View style={style.dataContainer}>
        <View style={style.leftContainer} />
        <View style={style.middleContainer} />
        <View style={style.rightContainer} />
      </View>
      <View style={style.buttonsContainer} />
    </ScrollView>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  dataContainer: {},
  buttonsContainer: {},
  leftContainer: {},
  middleContainer: {},
  rightContainer: {}
});
