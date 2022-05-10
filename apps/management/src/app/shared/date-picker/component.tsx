import React, { ReactElement, useState } from 'react';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { InputType } from 'ui-kit/text-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity, View } from 'react-native';
import { DateTime } from 'luxon';
import { get } from 'lodash';

type Props<T> = InputFormGroupProps<T>;

export function DatePicker<T>({ formik, name, placeholder, containerStyle }: Props<T>): ReactElement {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const selectedDate = get(formik.values, name);

  const showDatePicker = (): void => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (): void => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date): void => {
    hideDatePicker();
    formik.setFieldValue(name, DateTime.fromJSDate(date));
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <InputFormGroup
          value={selectedDate?.toSQLDate?.()}
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
        date={selectedDate?.toJSDate?.()}
      />
    </View>
  );
}
