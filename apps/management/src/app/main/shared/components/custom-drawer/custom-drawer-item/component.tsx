import { variables } from '@styles';
import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { Icons } from '../../../../../../../../../packages/assets/icons/icons';

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
        <View style={[style.icon, isActive && { backgroundColor: variables.color.backgroundSecondary }]}>
          <Icon name={icon} />
        </View>
        <AppText theme={TextTheme.SMALL} style={[style.text, { fontWeight: isActive ? '700' : '400' }]}>
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
    borderRadius: 22
  },
  text: {
    color: variables.color.textSecondary
  }
});
