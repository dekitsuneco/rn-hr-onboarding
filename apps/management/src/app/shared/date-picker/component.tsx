import React, { ReactElement } from 'react';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { InputType } from 'ui-kit/text-input';

type Props<T> = InputFormGroupProps<T>;

export function DatePicker<T>({ formik, name, placeholder }: Props<T>): ReactElement {
  return <InputFormGroup
    formik={formik}
    name={name}
    type={InputType.DATE}
    placeholder={placeholder} />;
}
