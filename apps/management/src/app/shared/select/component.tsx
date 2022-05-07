import { FormikValues } from 'formik';
import React, { ReactElement, useMemo, useState } from 'react';
import { LayoutChangeEvent, ViewStyle, TouchableOpacity } from 'react-native';
import { Dropdown } from 'ui-kit/dropdown';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { InputType } from 'ui-kit/text-input';
import { SelectOption } from './models';

export interface SelectProps<T> extends InputFormGroupProps<T> {
  options?: Array<SelectOption>;
  onPress?: () => void;
  isLoading?: boolean;
  triggerContainerStyle?: ViewStyle;
  optionsContainerStyle?: ViewStyle;
}

export function Select<T = FormikValues>({
  formik,
  name,
  options,
  placeholder,
  onPress,
  triggerContainerStyle,
  optionsContainerStyle,
  isLoading,
  message
}: SelectProps<T>): ReactElement {
  const [title, setTitle] = useState<string>();
  const [optionsWidth, setOptionsWidth] = useState<number>();

  const renderedOptions = useMemo(() => {
    return options.map(({ title, id }) => ({
      title,
      onSelect: () => {
        formik.setFieldValue(name, id);
        setTitle(title);
      }
    }));
  }, [options, optionsWidth]);

  const onLayout = (event: LayoutChangeEvent): void => {
    const { width } = event.nativeEvent.layout;
    setOptionsWidth(width);
  };

  return (
    <Dropdown
      isLoading={isLoading}
      style={{ width: optionsWidth, ...optionsContainerStyle }}
      triggerContainerStyle={triggerContainerStyle}
      hasAnchor={false}
      alignTo='center'
      renderTo='bottom'
      renderTrigger={(props) => (
        <TouchableOpacity
          onLayout={onLayout}
          onPress={() => {
            onPress?.();
            props.onPress();
          }}>
          <InputFormGroup
            placeholder={placeholder}
            type={InputType.SELECT}
            pointerEvents='none'
            formik={formik}
            name={name}
            value={title}
            message={message}
          />
        </TouchableOpacity>
      )}
      optionsProps={renderedOptions}
    />
  );
}
