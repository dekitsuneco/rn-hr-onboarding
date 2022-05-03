import { Icons } from 'assets/icons';
import React, { ReactElement } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { createStyles, variables } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';

export interface MenuItemProps {
  onPress: () => void;
  icon: keyof typeof Icons;
  title: string;
  style?: ViewStyle;
}

export function MenuItem({ onPress: handlePress, icon, title, style: customStyles = {} }: MenuItemProps): ReactElement {
  return (
    <TouchableOpacity style={[style.actionsMenuItem, customStyles]} onPress={handlePress}>
      <View style={style.itemContainer}>
        <View style={style.itemIcon}>
          <Icon name={icon} />
        </View>
        <AppText theme={TextTheme.SMALL} style={style.itemText}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const style = createStyles({
  actionsMenuItem: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemIcon: {
    marginRight: 16,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    color: variables.color.textPrimary
  }
});
