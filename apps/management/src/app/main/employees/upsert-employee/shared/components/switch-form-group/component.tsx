import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { AppSwitch } from 'ui-kit/switch';
import { AppText } from 'ui-kit/text';

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
  value: boolean;
}

export function SwitchFormGroup({ label, style: elementStyle, value }: Props): ReactElement {
  return (
    <View style={[style.container, elementStyle]}>
      <AppSwitch style={style.switch} value={value} />
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
