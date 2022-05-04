import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { AppText } from 'ui-kit/text';

export function EmptyState(): ReactElement {
  return (
    <View style={style.container}>
      <AppText>No items yet</AppText>
    </View>
  );
}

const style = createStyles({
  container: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
