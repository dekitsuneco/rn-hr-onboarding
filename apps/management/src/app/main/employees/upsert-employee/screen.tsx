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
import { SwitchFormGroup } from '@shared/switch-form-group';
import { DatePicker } from '@shared/date-picker';
import { Select } from '@shared/select';
import { UserSelect } from '@shared/user-select';
import { upsertEmployeeFacade } from './facade';
import { RouteProp } from '@react-navigation/native';
import { EmployeesNavigationParams } from '../navigation';
import { User } from 'features/data';
import { plainToInstance } from 'class-transformer';

const roleOptions = [
  { id: 1, title: 'Hr' },
  { id: 3, title: 'Employee' },
  { id: 2, title: 'Admin' }
]; // TODO temporary fake options

interface Props {
  route?: RouteProp<EmployeesNavigationParams, 'UpsertEmployee'>;
}

export function UpsertEmployeeScreen({ route }: Props): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.UPSERT_EMPLOYEE');
  const { isCreating, isUpdating, createUser, updateUser } = upsertEmployeeFacade;
  const editableEmployee = plainToInstance(User, route.params?.employee);

  const handleSubmitFrom = (values: EmployeeForm): void => {
    editableEmployee ? updateUser({ id: editableEmployee.id, ...values }) : createUser(values);
  };

  const handleCancel = (): void => {
    formik.setValues(formik.initialValues);
  };

  const formik = useFormik({
    initialValues: editableEmployee ? new EmployeeForm(editableEmployee) : new EmployeeForm(),
    validationSchema: EmployeeForm.validationSchema,
    onSubmit: handleSubmitFrom,
    validateOnChange: false //TODO temporary off to avoid lags
  });

  const { handleSubmit } = formik;

  return (
    <ScrollView style={commonStyle.wrapper} showsVerticalScrollIndicator={false}>
      <View style={style.form}>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_PROFILE_IMAGE')}</AppText>
          <UploadImage buttonText={translate('BUTTON_UPLOAD_IMAGE')} />
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_EMPLOYEE_DETAILS')}</AppText>
          {employeeDetailsInputs.map(({ name, placeholder, isDate }) => {
            if (isDate) {
              return (
                <DatePicker
                  key={name}
                  containerStyle={style.inputForm}
                  placeholder={translate('EMPLOYEE_FORM.' + placeholder)}
                  formik={formik}
                  name={name}
                />
              );
            } else {
              return (
                <InputFormGroup
                  key={name}
                  containerStyle={style.inputForm}
                  formik={formik}
                  placeholder={translate('EMPLOYEE_FORM.' + placeholder)}
                  name={name}
                />
              );
            }
          })}
        </View>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_ROLE')}</AppText>
          <Select
            containerStyle={style.inputForm}
            placeholder='Role'
            formik={formik}
            options={roleOptions}
            name='roleID'
          />
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_TEAM')}</AppText>
          {teamInputs.map(({ name, placeholder }) => (
            <UserSelect
              key={name}
              name={name}
              formik={formik}
              placeholder={translate('EMPLOYEE_FORM.' + placeholder)}
              triggerContainerStyle={style.inputForm}
              optionsContainerStyle={style.selectOptionsContainer}
            />
          ))}
        </View>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_ONBOARDING')}</AppText>
          <SwitchFormGroup<EmployeeForm>
            name='isOnboardingRequired'
            formik={formik}
            label={translate('TEXT_ONBOARDING_REQUIRED')}
          />
          <AppText theme={TextTheme.SMALLEST} style={[style.fromSubtitle, style.nonTransformedSubtitle]}>
            {translate('TEXT_SUBTITLE_ONBOARDING_SCRIPTS')}
          </AppText>
          {scripts.map((script) => (
            <SwitchFormGroup
              formik={formik}
              key={script}
              label={script}
              style={style.switchScript} />
          ))}
        </View>
      </View>
      <View style={style.buttons}>
        <View style={style.buttonContainer}>
          <AppButton isLoading={editableEmployee ? isUpdating : isCreating} onPress={() => handleSubmit()}>
            {editableEmployee ? translate('BUTTON_SAVE_CHANGES') : translate('BUTTON_ADD_EMPLOYEE')}
          </AppButton>
        </View>
        {!!editableEmployee && (
          <View style={[style.buttonContainer, style.buttonCancel]}>
            <AppButton onPress={handleCancel} theme='secondary'>
              {translate('BUTTON_CANCEL')}
            </AppButton>
          </View>
        )}
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
  selectOptionsContainer: {
    maxHeight: 250
  },
  buttons: {
    marginBottom: 50
  },
  buttonContainer: {
    marginBottom: 10
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
      flexDirection: 'row'
    },
    buttons: {
      flexDirection: 'row'
    },
    buttonContainer: {
      width: '33%',
      paddingHorizontal: '2rem'
    },
    buttonCancel: {
      marginLeft: -32
    }
  } as AnyStyle
});
