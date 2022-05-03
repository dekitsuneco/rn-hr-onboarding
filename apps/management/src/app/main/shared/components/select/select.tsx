import { FormikValues } from 'formik';
import React, { ReactElement, useRef, useState } from 'react';
import { LayoutChangeEvent, Pressable, ViewStyle } from 'react-native';
import { Dropdown } from 'ui-kit/dropdown';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
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
  const [optionsWidth, setOptionsWidth] = useState<number>();
  const triggerRef = useRef();

  const onLayout = (event: LayoutChangeEvent): void => {
    const { width } = event.nativeEvent.layout;
    setOptionsWidth(width);
  };

  return (
    <Dropdown
      style={{ flexDirection: 'row' }}
      triggerContainerStyle={containerStyle as ViewStyle}
      hasAnchor={false}
      renderTo='bottom'
      renderTrigger={(props) => (
        <Pressable
          onLayout={onLayout}
          ref={triggerRef}
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
        style: { width: optionsWidth }
      }))}
    />
  );
}
