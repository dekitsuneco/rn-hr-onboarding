import React, { ReactElement, useState } from 'react';
import { InputFormGroup, InputFormGroupProps } from 'ui-kit/input-form-group';
import { InputType } from 'ui-kit/text-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity, View } from 'react-native';
import { DateTime } from 'luxon';

type Props<T> = InputFormGroupProps<T>;

export function DatePicker<T>({ formik, name, placeholder, containerStyle }: Props<T>): ReactElement {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    formik.setFieldValue(name, DateTime.fromJSDate(date).toFormat('yyyy-MM-dd'));
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <InputFormGroup
          formik={formik}
          containerStyle={containerStyle}
          name={name}
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
