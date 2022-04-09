import React, { Children, ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: Array<ReactElement> | ReactElement;
}

export function FlexCenter({ children }: Props): ReactElement {
  const _children = Children.toArray(children);

  return <View style={style.container}>{_children}</View>;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
