import { createStyles } from '@styles';
import { useFormik } from 'formik';
import React, { ReactElement } from 'react';
import { View, ScrollView } from 'react-native';
import { AppText } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { EmployeeForm } from './shared/forms/employee';
import { UploadImage } from 'ui-kit/image-upload';
import { InputFormGroup } from 'ui-kit/input-form-group';

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
      <View style={style.form}>
        <View style={style.profileDetails}>
          <AppText>{translate('SUBTITLE_PROFILE_IMAGE').toLocaleUpperCase()}</AppText>
          <UploadImage buttonText='Upload profile image' />
          <AppText>{translate('SUBTITLE_EMPLOYEE_DETAILS').toLocaleUpperCase()}</AppText>
          <InputFormGroup formik={formik} name='first_name' />
          <InputFormGroup formik={formik} name='last_name' />
          <InputFormGroup formik={formik} name='date_of_birth' />
          <InputFormGroup formik={formik} name='email' />
          <InputFormGroup formik={formik} name='phone_number' />
          <InputFormGroup formik={formik} name='position' />
          <InputFormGroup formik={formik} name='starts_on' />
        </View>
        <View style={style.roleTeamSelect} />
        <View style={style.onboarding} />
      </View>
      <View style={style.buttons} />
    </ScrollView>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  form: {},
  buttons: {},
  profileDetails: {},
  roleTeamSelect: {},
  onboarding: {}
});
