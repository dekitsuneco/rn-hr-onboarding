import { FormikValues } from 'formik';
import React, { ReactElement, useMemo, useState } from 'react';
import { LayoutChangeEvent, ViewStyle, TouchableOpacity } from 'react-native';
import { Dropdown } from 'ui-kit/dropdown';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { InputType } from 'ui-kit/text-input';
import { SelectOption } from './models';

interface Props<T> extends InputFormGroupProps<T> {
  options?: Array<SelectOption>;
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
  const [title, setTitle] = useState<string>();
  const [optionsWidth, setOptionsWidth] = useState<number>();

  const renderedOptions = useMemo(() => {
    return options.map(({ title, id }) => ({
      title,
      onSelect: () => {
        formik.setFieldValue(name, id);
        setTitle(title);
      },
      style: { width: optionsWidth }
    }));
  }, [options, optionsWidth]);

  const onLayout = (event: LayoutChangeEvent): void => {
    const { width } = event.nativeEvent.layout;
    setOptionsWidth(width);
  };

  return (
    <Dropdown
      triggerContainerStyle={containerStyle as ViewStyle}
      hasAnchor={false}
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
          />
        </TouchableOpacity>
      )}
      optionsProps={renderedOptions}
    />
  );
}
