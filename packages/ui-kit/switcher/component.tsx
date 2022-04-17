import React, { ReactElement, useCallback } from 'react';
import { Pressable, FlatList, View } from 'react-native';
import { commonStyle, createStyles, variables } from '../styles';
import { AppText, TextTheme } from '../text';

interface Props {
  items: Array<string>;
  current: string;
  onItemSelect: (item: string) => void;
}

export function Switcher({ items, onItemSelect, current }: Props): ReactElement {
  const renderedItem = useCallback(
    ({ item }: { item: string }) => {
      const isCurrent = current === item;

      return (
        <Pressable
          key={item}
          style={[style.item, isCurrent && style.itemActive]}
          onPress={() => onItemSelect(item)}>
          <AppText theme={TextTheme.SMALLEST} style={isCurrent && commonStyle.textBold}>
            {item}
          </AppText>
        </Pressable>
      );
    },
    [current]
  );

  return (
    <View style={style.wrapper}>
      <FlatList
        horizontal
        keyExtractor={(item) => item}
        data={items}
        renderItem={renderedItem}
        contentContainerStyle={style.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const style = createStyles({
  wrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 42,
    backgroundColor: variables.color.backgroundSecondary
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 12
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
