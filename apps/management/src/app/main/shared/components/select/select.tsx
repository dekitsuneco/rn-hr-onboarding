import { FormikValues } from 'formik';
import React, { ReactElement, useState } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { Dropdown } from 'ui-kit/dropdown';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { createStyles } from 'ui-kit/styles';
import { InputType } from 'ui-kit/text-input';
import { Option } from './models';

interface Props<T> extends InputFormGroupProps<T> {
  options?: Array<Option>;
  onPress?: () => void;
}

export function Select<T = FormikValues>({
  formik,
  name,
  options,
  placeholder,
  onPress,
  containerStyle
}: Props<T>): ReactElement {
  const [value, setValue] = useState<string>();

  return (
    <Dropdown
      triggerContainerStyle={containerStyle as ViewStyle}
      hasAnchor={false}
      renderTo='bottom'
      renderTrigger={(props) => (
        <Pressable
          onPress={() => {
            onPress?.();
            props.onPress();
          }}>
          <InputFormGroup
            placeholder={placeholder}
            type={InputType.SELECT}
            formik={formik}
            name={name}
            value={value} />
        </Pressable>
      )}
      optionsProps={options.map(({ title, id }) => ({
        title,
        onSelect: () => {
          formik.setFieldValue(name, id);
          setValue(title);
        },
        style: style.optionContainer
      }))}
    />
  );
}

const style = createStyles({
  optionContainer: {
    minWidth: '100%'
  }
});
