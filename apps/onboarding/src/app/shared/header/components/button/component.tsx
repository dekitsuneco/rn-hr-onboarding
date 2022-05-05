import React, { ReactElement } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { createStyles } from '@styles';
import { Icons } from 'assets/icons';

interface Props extends Pick<TouchableOpacityProps, 'style' | 'onPress'> {
  iconName: keyof typeof Icons;
}

export function HeaderButton({ iconName, onPress, style: elementStyle }: Props): ReactElement {
  return (
    <TouchableOpacity style={[style.container, elementStyle]} onPress={onPress}>
      <Icon name={iconName} />
    </TouchableOpacity>
  );
}

const style = createStyles({
  container: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
