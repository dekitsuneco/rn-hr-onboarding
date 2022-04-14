import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { InputType } from 'ui-kit/text-input';
import { InputFormGroup } from 'ui-kit/input-form-group';
import { AppButton } from 'ui-kit/button';
import { createStyles, variables } from 'ui-kit/styles';
import { useFormik } from 'formik';
import { LoginForm, LoginProperties } from './login';
import { useTranslation } from 'utils/i18n';

export function LoginGroup(onSubmit: () => void, onSignIn: () => void, onForgotPassword: () => void): ReactElement {
  const translate = useTranslation('PUBLIC.LOGIN');

  const formik = useFormik({
    initialValues: new LoginForm(),
    validationSchema: LoginForm.validationSchema,
    onSubmit: onSubmit
  });

  return (
    <View style={style.form}>
      <View style={style.top}>
        <Icon name='logoManagement' style={style.logo} />
      </View>
      <View style={style.middle}>
        <InputFormGroup<LoginForm>
          containerStyle={[style.input, style.middleItem]}
          type={InputType.TEXT}
          placeholder={translate('PLACEHOLDER_EMAIL')}
          formik={formik}
          name={LoginProperties.email}
        />
        <InputFormGroup<LoginForm>
          containerStyle={[style.input, style.middleItem]}
          type={InputType.PASSWORD}
          placeholder={translate('PLACEHOLDER_EMAIL')}
          formik={formik}
          name={LoginProperties.password}
        />
        <AppButton
          style={style.signInButton}
          title={translate('BUTTON_SIGN_IN')}
          onPress={onSignIn} />
      </View>
      <View style={style.bottom}>
        <AppButton
          style={style.forgotButton}
          title={translate('BUTTON_FORGOT_PASSWORD')}
          theme='tertiary'
          onPress={onForgotPassword}
        />
      </View>
    </View>
  );
}

const style = createStyles({
  form: {
    height: '100%',
    backgroundColor: variables.color.white,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 600
  },
  top: {
    marginBottom: 118
  },
  middle: {
    marginBottom: 70
  },
  middleItem: {
    marginBottom: 16
  },
  bottom: {},
  logo: {
    padding: 4
  },
  input: {
    width: 300
  },
  signInButton: {
    width: 300
  },
  forgotButton: {}
});

//* Create login form
//* Add Formik & Yup validation
//* Add i18n translations
