import { FormSection } from '@shared/form-section';
import { commonStyle } from '@styles';
import { useFormik } from 'formik';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { UploadImage } from 'ui-kit/image-upload';
import { InputFormGroup } from 'ui-kit/input-form-group';
import { AnyStyle, createStyles, variables } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';
import { scriptDetailsInputs, ScriptForm } from '../../forms/script';

export function UpsertScriptForm(): JSX.Element {
  const translate = useTranslation('MAIN.SCRIPTS.SHARED.UPSERT_SCRIPT_FORM');

  const handleSubmitFrom = (values: ScriptForm): void => {
    console.log(values);
  }; //TODO temporary function to log the form

  const formik = useFormik({
    initialValues: new ScriptForm(),
    onSubmit: handleSubmitFrom
  });

  const { handleSubmit } = formik;

  return (
    <ScrollView contentContainerStyle={commonStyle.wrapper} showsVerticalScrollIndicator={false}>
      <View style={style.form}>
        <FormSection title={translate('TEXT_SUBTITLE_COVER_IMAGE')}>
          <UploadImage buttonText={translate('BUTTON_UPLOAD_COVER_IMAGE')} />
        </FormSection>
        <FormSection title={translate('TEXT_SUBTITLE_SCRIPT_DETAILS')}>
          {scriptDetailsInputs.map(({ name, placeholder }) => (
            <InputFormGroup
              key={name}
              containerStyle={style.inputForm}
              formik={formik}
              placeholder={placeholder}
              name={name}
            />
          ))}
        </FormSection>
      </View>
      <View style={style.buttons}>
        <View style={style.buttonContainer}>
          <AppButton onPress={() => handleSubmit()}>{translate('BUTTON_ADD_SCRIPT')}</AppButton>
        </View>
      </View>
    </ScrollView>
  );
}

const style = createStyles({
  form: {
    marginBottom: 60
  },
  inputForm: {
    marginBottom: 16
  },
  buttons: {
    marginBottom: 50
  },
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    form: {
      flexDirection: 'row'
    },
    buttonContainer: {
      maxWidth: '33%',
      paddingHorizontal: '2rem'
    }
  } as AnyStyle
});
