import { FormikValues } from 'formik';
import React, { ReactElement } from 'react';
import { Pressable } from 'react-native';
import { Dropdown } from 'ui-kit/dropdown';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { InputType } from 'ui-kit/text-input';
import { Option } from './models';

interface Props<T> extends InputFormGroupProps<T> {
  options?: Array<Option>;
}

export function Select<T = FormikValues>({ formik, name, options, handleChange, placeholder }: Props<T>): ReactElement {
  return (
    <Dropdown
      hasAnchor={false}
      renderTo='bottom'
      alignTo='bottom'
      renderTrigger={(props) => (
        <Pressable {...props}>
          <InputFormGroup
            placeholder={placeholder}
            type={InputType.SELECT}
            formik={formik}
            name={name}
            value='sss' />
        </Pressable>
      )}
      optionsProps={options.map(({ title, id }) => ({ title }))}
    />
  );
}
