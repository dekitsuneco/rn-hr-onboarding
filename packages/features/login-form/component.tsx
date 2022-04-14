import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { InputType } from 'ui-kit/text-input';
import { InputFormGroup } from 'ui-kit/input-form-group';
import { AppButton } from 'ui-kit/button';
import { createStyles, variables } from 'ui-kit/styles';
import { useFormik } from 'formik';
import { LoginForm } from './forms/login';

export interface LoginGroupProps {
  onSubmit: () => void;
  onForgotPassword: () => void;
}

export function LoginGroup({ onSubmit, onForgotPassword }: LoginGroupProps): ReactElement {
  const formik = useFormik({
    initialValues: new LoginForm(),
    validationSchema: LoginForm.validationSchema,
    onSubmit: onSubmit
  });

  const { handleSubmit } = formik;

  return (
    <View style={style.form}>
      <View style={style.top}>
        <Icon name='logoManagement' style={style.logo} />
      </View>
      <View style={style.middle}>
        <InputFormGroup<LoginForm>
          containerStyle={[style.input, style.middleItem]}
          type={InputType.TEXT}
          placeholder={'Email'}
          autoCapitalize='none'
          formik={formik}
          name={'email' as keyof LoginForm}
        />
        <InputFormGroup<LoginForm>
          containerStyle={[style.input, style.middleItem]}
          type={InputType.PASSWORD}
          placeholder={'Password'}
          autoCapitalize='none'
          formik={formik}
          name={'password' as keyof LoginForm}
        />
        <AppButton
          style={style.signInButton}
          title={'Sign In'}
          onPress={() => handleSubmit()} />
      </View>
      <View style={style.bottom}>
        <AppButton
          style={style.forgotButton}
          title={'Forgot password?'}
          theme='tertiary'
          onPress={onForgotPassword} />
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
