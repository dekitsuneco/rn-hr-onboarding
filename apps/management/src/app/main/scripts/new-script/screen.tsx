import { commonStyle } from '@styles';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { NewScriptForm } from '../shared/components/new-script-form';

export function NewScriptScreen(): ReactElement {
  return (
    <View style={commonStyle.wrapper}>
      <NewScriptForm />
    </View>
  );
}
