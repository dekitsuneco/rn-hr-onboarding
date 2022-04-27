import { commonStyle, createStyles, variables } from '@styles';
import { useFormik } from 'formik';
import React, { ReactElement } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { employeeDetailsInputs, EmployeeForm, scripts, teamInputs } from './shared/forms/employee';
import { UploadImage } from 'ui-kit/image-upload';
import { InputFormGroup } from 'ui-kit/input-form-group';
import { AppButton } from 'ui-kit/button';
import { AnyStyle } from 'ui-kit/styles';
import { InputType } from 'ui-kit/text-input';
import { SwitchFormGroup } from './shared/components';

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
    <ScrollView style={commonStyle.wrapper} showsVerticalScrollIndicator={false}>
      <View style={style.form}>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_PROFILE_IMAGE')}</AppText>
          <UploadImage buttonText={translate('BUTTON_UPLOAD_IMAGE')} />
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_EMPLOYEE_DETAILS')}</AppText>
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
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_ROLE')}</AppText>
          <InputFormGroup
            type={InputType.SELECT}
            containerStyle={style.inputForm}
            formik={formik}
            placeholder='Role'
            name='role'
          />
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_TEAM')}</AppText>
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
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_ONBOARDING')}</AppText>
          <SwitchFormGroup value={true} label={translate('TEXT_ONBOARDING_REQUIRED')} />
          <AppText theme={TextTheme.SMALLEST} style={[style.fromSubtitle, style.nonTransformedSubtitle]}>
            {translate('TEXT_SUBTITLE_ONBOARDING_SCRIPTS')}
          </AppText>
          {scripts.map((script) => (
            <SwitchFormGroup
              value={false}
              key={script}
              label={script}
              style={style.switchScript} />
          ))}
        </View>
      </View>
      <View style={style.buttons}>
        <View style={style.buttonContainer}>
          <AppButton onPress={() => handleSubmit()}>{translate('BUTTON_ADD_EMPLOYEE')}</AppButton>
        </View>
      </View>
    </ScrollView>
  );
}

const style = createStyles({
  form: {
    marginBottom: 60
  },
  fromSubtitle: {
    marginBottom: 24,
    marginTop: 40,
    textTransform: 'uppercase'
  },
  nonTransformedSubtitle: {
    textTransform: 'none'
  },
  inputForm: {
    marginBottom: 16
  },
  buttons: {
    marginBottom: 50
  },
  switchScript: {
    borderBottomWidth: 1,
    borderColor: variables.color.borderColorSecondary,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0
  },
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    column: {
      flexBasis: '33%',
      paddingHorizontal: '2rem',
      maxWidth: '33%'
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    buttonContainer: {
      maxWidth: '33%',
      paddingHorizontal: '2rem'
    }
  } as AnyStyle
});
