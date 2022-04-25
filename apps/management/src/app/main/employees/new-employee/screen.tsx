import { createStyles } from '@styles';
import { useFormik } from 'formik';
import React, { ReactElement } from 'react';
import { View, ScrollView } from 'react-native';
import { AppText } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { EmployeeForm } from './shared/forms/employee';
import { UploadImage } from 'ui-kit/image-upload';

export function NewEmployeeScreen(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.NEW_EMPLOYEE');
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
        <View style={style.leftContainer}>
          <AppText>{translate('SUBTITLE_PROFILE_IMAGE').toLocaleUpperCase()}</AppText>
          <UploadImage buttonText='Upload profile image' />
        </View>
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
