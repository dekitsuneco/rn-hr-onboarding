import { commonStyle, createStyles, variables } from '@styles';
import { useFormik } from 'formik';
import React, { ReactElement } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { employeeDetailsInputs, EmployeeForm, scripts, teamInputs } from './shared/forms/employee';
import { UploadImage } from 'ui-kit/image-upload';
import { InputFormGroup } from 'ui-kit/input-form-group';
import { AppSwitch } from 'ui-kit/switch';
import { AppButton } from 'ui-kit/button';
import { AnyStyle } from 'ui-kit/styles';
import { InputType } from 'ui-kit/text-input';

export function NewEmployeeScreen(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.NEW_EMPLOYEE');

  const handleSubmitFrom = (values: EmployeeForm): void => {
    console.log(values);
  }; //TODO temporary function to log the form

  const formik = useFormik({
    initialValues: new EmployeeForm(),
    onSubmit: handleSubmitFrom
  });

  const { handleSubmit } = formik;

  return (
    <ScrollView style={[commonStyle.wrapper, style.container]} showsVerticalScrollIndicator={false}>
      <View style={style.form}>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('SUBTITLE_PROFILE_IMAGE').toLocaleUpperCase()}</AppText>
          <UploadImage buttonText={translate('BUTTON_UPLOAD_IMAGE')} />
          <AppText style={style.fromSubtitle}>{translate('SUBTITLE_EMPLOYEE_DETAILS').toLocaleUpperCase()}</AppText>
          {employeeDetailsInputs.map(({ name, placeholder }) => (
            <InputFormGroup
              key={name}
              containerStyle={style.inputForm}
              formik={formik}
              placeholder={placeholder}
              name={name}
            />
          ))}
        </View>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('SUBTITLE_ROLE').toLocaleUpperCase()}</AppText>
          <InputFormGroup
            type={InputType.SELECT}
            containerStyle={style.inputForm}
            formik={formik}
            placeholder='Role'
            name='role'
          />
          <AppText style={style.fromSubtitle}>{translate('SUBTITLE_TEAM').toLocaleUpperCase()}</AppText>
          {teamInputs.map(({ name, placeholder }) => (
            <InputFormGroup
              key={name}
              type={InputType.SELECT}
              containerStyle={style.inputForm}
              formik={formik}
              placeholder={placeholder}
              name={name}
            />
          ))}
        </View>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('SUBTITLE_ONBOARDING').toLocaleUpperCase()}</AppText>
          <View style={style.switchContainer}>
            <AppSwitch value={true} />
            <AppText>{translate('TEXT_ONBOARDING_REQUIRED')}</AppText>
          </View>
          <AppText theme={TextTheme.SMALLEST} style={style.fromSubtitle}>
            {translate('SUBTITLE_ONBOARDING_SCRIPTS')}
          </AppText>
          {scripts.map((script) => (
            <View key={script} style={[style.switchContainer, style.switchScript]}>
              <AppSwitch value={false} />
              <AppText>{script}</AppText>
            </View>
          ))}
        </View>
      </View>
      <View style={style.buttons}>
        <AppButton style={style.button} onPress={() => handleSubmit()}>
          {translate('BUTTON_ADD_EMPLOYEE')}
        </AppButton>
      </View>
    </ScrollView>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: variables.color.background
  },
  form: {
    marginTop: -20,
    marginBottom: 60
  },
  fromSubtitle: {
    marginBottom: 24,
    marginTop: 60
  },
  inputForm: {
    marginBottom: 16
  },
  buttons: {
    marginBottom: 50
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switchScript: {
    borderBottomWidth: 1,
    borderColor: variables.color.borderColorSecondary,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0
  },
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    column: {
      width: 300
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    button: {
      width: 300
    }
  } as AnyStyle
});
