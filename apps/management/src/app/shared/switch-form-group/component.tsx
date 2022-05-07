import { FormikProps, FormikValues } from 'formik';
import { get } from 'lodash';
import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { AppSwitch } from 'ui-kit/switch';
import { AppText } from 'ui-kit/text';

interface Props<T = FormikValues> {
  label: string;
  style?: StyleProp<ViewStyle>;
  formik: FormikProps<T>;
  name?: keyof T & string;
}

export function SwitchFormGroup<T = FormikValues>({
  label,
  style: elementStyle,
  formik,
  name
}: Props<T>): ReactElement {
  const value = name ? get(formik.values, name) : false;

  const handleValueChange = (): void => {
    if (name) {
      formik.setFieldValue(name, !value);
    }
  };

  return (
    <View style={[style.container, elementStyle]}>
      <AppSwitch
        style={style.switch}
        value={value}
        onValueChange={handleValueChange} />
      <AppText>{label}</AppText>
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switch: {
    marginRight: 16
  }
});
