import { commonStyle, variables } from '@styles';
import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { Icons } from 'assets/icons';

interface Props {
  label: string;
  icon: keyof typeof Icons;
  onPress: () => void;
  isActive?: boolean;
}

export function CustomDrawerItem({ label, icon, onPress, isActive }: Props): ReactElement {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View style={style.menuItem}>
        <View style={[style.icon, isActive && style.iconActive]}>
          <Icon name={icon} />
        </View>
        <AppText theme={TextTheme.SMALL} style={[style.text, isActive && commonStyle.textBold]}>
          {label}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const style = createStyles({
  container: {
    justifyContent: 'center'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 14,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    overflow: 'hidden'
  },
  iconActive: {
    backgroundColor: variables.color.backgroundSecondary
  },
  text: {
    color: variables.color.textSecondary
  }
});
