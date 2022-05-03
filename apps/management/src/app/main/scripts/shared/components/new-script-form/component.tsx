import { commonStyle } from '@styles';
import { useFormik } from 'formik';
import React from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { UploadImage } from 'ui-kit/image-upload';
import { InputFormGroup } from 'ui-kit/input-form-group';
import { AnyStyle, createStyles, variables } from 'ui-kit/styles';
import { AppText } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { scriptDetailsInputs, ScriptForm } from '../../forms/script';

export function NewScriptForm(): JSX.Element {
  const translate = useTranslation('MAIN.SCRIPTS.SHARED');

  const handleSubmitFrom = (values: ScriptForm): void => {
    console.log(values);
  }; //TODO temporary function to log the form

  const formik = useFormik({
    initialValues: new ScriptForm(),
    onSubmit: handleSubmitFrom
  });

  const { handleSubmit } = formik;

  return (
    <ScrollView style={commonStyle.wrapper} showsVerticalScrollIndicator={false}>
      <View style={style.form}>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_COVER_IMAGE')}</AppText>
          <UploadImage buttonText={translate('BUTTON_UPLOAD_COVER_IMAGE')} />
        </View>
        <View style={style.column}>
          <AppText style={style.fromSubtitle}>{translate('TEXT_SUBTITLE_SCRIPT_DETAILS')}</AppText>
          {scriptDetailsInputs.map(({ name, placeholder }) => (
            <InputFormGroup
              key={name}
              containerStyle={style.inputForm}
              formik={formik}
              placeholder={placeholder}
              name={name}
            />
          ))}
        </View>
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
      flexDirection: 'row'
    },
    buttonContainer: {
      maxWidth: '33%',
      paddingHorizontal: '2rem'
    }
  } as AnyStyle
});
