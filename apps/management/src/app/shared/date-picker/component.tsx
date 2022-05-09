import React, { ReactElement, useState } from 'react';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { InputType } from 'ui-kit/text-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity, View } from 'react-native';
import { DateTime } from 'luxon';

type Props<T> = InputFormGroupProps<T>;

export function DatePicker<T>({ formik, name, placeholder, containerStyle }: Props<T>): ReactElement {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [value, setValue] = useState('');

  const showDatePicker = (): void => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (): void => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date): void => {
    const transformedDate = DateTime.fromJSDate(date);
    formik.setFieldValue(name, transformedDate);
    setValue(transformedDate.toSQLDate());
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <InputFormGroup
          value={value}
          formik={formik}
          containerStyle={containerStyle}
          name={name}
          pointerEvents='none'
          type={InputType.DATE}
          placeholder={placeholder}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
