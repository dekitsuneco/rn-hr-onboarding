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
      style={containerStyle}>
      <View style={[style.wrapper, wrapperStyle]}>{items.map((item) => renderedItem({ item }))}</View>
    </ScrollView>
  );
}

const style = createStyles({
  wrapper: {
    borderRadius: 10,
    backgroundColor: variables.color.backgroundSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    height: 42,
    overflow: 'hidden'
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6
  },
  itemActive: {
    backgroundColor: variables.color.white,
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 20
  }
});
