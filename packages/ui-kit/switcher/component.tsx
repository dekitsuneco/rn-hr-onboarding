import React, { ReactElement, useCallback } from 'react';
import { Pressable, View, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { createStyles, variables } from '../styles';
import { AppText, TextTheme } from '../text';
import { SwitcherItem } from './models';

interface Props {
  items: Array<SwitcherItem>;
  current: string;
  onItemSelect: (item: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export function Switcher({ items, onItemSelect, current, containerStyle, wrapperStyle }: Props): ReactElement {
  const renderedItem = useCallback(
    ({ item }: { item: SwitcherItem }) => {
      const isCurrent = current === item.key;

      return (
        <Pressable
          key={item.key}
          style={[style.item, isCurrent && style.itemActive]}
          onPress={() => onItemSelect(item.key)}>
          <AppText theme={TextTheme.SMALLEST} isBold={isCurrent}>
            {item.title}
          </AppText>
        </Pressable>
      );
    },
    [current]
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[style.container, containerStyle]}>
      <View style={[style.wrapper, wrapperStyle]}>{items.map((item) => renderedItem({ item }))}</View>
    </ScrollView>
  );
}

const style = createStyles({
  container: {
    maxHeight: 42
  },
  wrapper: {
    borderRadius: 10,
    backgroundColor: variables.color.backgroundSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 42,
    overflow: 'hidden'
  },
  item: {
    marginHorizontal: 18,
    paddingVertical: 5
  },
  itemActive: {
    justifyContent: 'center',
    backgroundColor: variables.color.white,
    height: 34,
    paddingHorizontal: 23,
    borderRadius: 6,
    marginHorizontal: -8,
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 20
  },
  '@media (min-width: 768)': {
    item: {
      marginHorizontal: 21
    },
    itemActive: {
      marginHorizontal: 5
    },
    container: {
      paddingHorizontal: 0
    }
  }
});