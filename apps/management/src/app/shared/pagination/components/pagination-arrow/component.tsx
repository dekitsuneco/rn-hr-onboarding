import React, { ReactElement } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Icons } from 'assets/icons';
import { Icon } from 'ui-kit/icon';
import { createStyles } from '@styles';

interface Props extends TouchableOpacityProps {
  iconName: keyof typeof Icons;
  isHidden?: boolean;
}

export function PaginationArrow({ iconName, onPress, isHidden }: Props): ReactElement {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={onPress}
      disabled={isHidden}>
      {!isHidden && <Icon name={iconName} />}
    </TouchableOpacity>
  );
}

const style = createStyles({
  container: {
    width: 44,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
