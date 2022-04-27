import React, { ReactElement } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { InputType } from 'ui-kit/text-input';
import { InputFormGroup } from 'ui-kit/input-form-group';
import { AppButton } from 'ui-kit/button';
import { createStyles, variables } from 'ui-kit/styles';
import { useFormik } from 'formik';
import { LoginForm } from './forms/login';
import { AppText, TextTheme } from 'ui-kit/text';

//TODO Replace hard-coded 'name' and 'placeholder' properties with translations from i18n
export interface LoginGroupProps {
  onSubmit: (values: LoginForm) => void;
  onForgotPassword: () => void;
  style?: StyleProp<ViewStyle>;
  isSubmitting?: boolean;
  errorMessage?: string;
}

export function LoginGroup({
  onSubmit,
  onForgotPassword,
  style: formStyle = {},
  isSubmitting,
  errorMessage
}: LoginGroupProps): ReactElement {
  const formik = useFormik({
    initialValues: new LoginForm(),
    validationSchema: LoginForm.validationSchema,
    onSubmit: onSubmit
  });

  const { handleSubmit } = formik;

  return (
    <View style={[style.form, formStyle]}>
      <View style={style.middle}>
        <InputFormGroup<LoginForm>
          containerStyle={[style.middleItem, style.control]}
          type={InputType.TEXT}
          placeholder={'Email'}
          autoCapitalize='none'
          formik={formik}
          name={'email' as keyof LoginForm}
        />
        <InputFormGroup<LoginForm>
          containerStyle={[style.middleItem, style.control]}
          type={InputType.PASSWORD}
          placeholder={'Password'}
          autoCapitalize='none'
          formik={formik}
          name={'password' as keyof LoginForm}
        />
        {!!errorMessage && (
          <View>
            <AppText theme={TextTheme.SMALLEST} style={style.errorMessage}>
              {errorMessage}
            </AppText>
          </View>
        )}
        <AppButton
          style={style.control}
          title={'Sign In'}
          onPress={() => handleSubmit()}
          isLoading={isSubmitting} />
      </View>
      <View>
        <AppButton
          style={style.control}
          title={'Forgot password?'}
          theme='tertiary'
          onPress={onForgotPassword} />
      </View>
    </View>
  );
}

const style = createStyles({
  form: {
    backgroundColor: variables.color.white,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 600
  },
  middle: {
    marginBottom: 70,
    alignItems: 'center'
  },
  middleItem: {
    marginBottom: '1rem'
  },
  control: {
    minWidth: '100%'
  },
  errorMessage: {
    marginBottom: '0.25rem',
    textAlign: 'center',
    letterSpacing: -0.62,
    color: variables.color.statusDanger
  },
  '@media (max-width: 768)': {
    middle: {
      marginBottom: 34
    }
  }
});
