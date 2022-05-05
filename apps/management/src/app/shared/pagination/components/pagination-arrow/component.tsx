import { createStyles } from '@styles';
import { Icons } from 'assets/icons';
import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'ui-kit/icon';

interface Props {
  iconName: keyof typeof Icons;
  isHidden?: boolean;
  onPress?: () => void;
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
