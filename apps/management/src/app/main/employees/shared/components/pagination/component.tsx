import { variables } from '@styles';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { createStyles } from 'ui-kit/styles';

interface Props {
  numberOfPages: number;
  isActive?: boolean;
}

export function Pagination({ numberOfPages, isActive }: Props): ReactElement {
  return (
    <View style={style.container}>
      {[...Array(numberOfPages)].map((_, page) => (
        <View key={page}>
          <AppButton title={(page + 1).toString()} style={style.item} />
        </View>
      ))}
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row'
  },
  item: {
    width: 44,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemActive: {
    backgroundColor: 'red'
  },
  itemText: {
    color: variables.color.primary
  }
});
