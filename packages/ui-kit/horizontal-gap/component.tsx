import React, { ReactElement, Children } from 'react';
import { View } from 'react-native';
import { createStyles } from 'ui-kit/styles';

interface Props {
  children: ReactElement | Array<ReactElement>;
  style: any;
  gap: number;
}

export function HorizontalGap({ children, gap, style: elementStyle = {} }: Props): JSX.Element {
  const _children = Children.toArray(children);

  return (
    <View style={[style.container, elementStyle]}>
      {_children.map((child, index) => {
        const hasGap = !!_children[index + 1];

        return (
          <View style={[hasGap && { marginRight: gap }]} key={index}>
            {child}
          </View>
        );
      })}
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row'
  }
});
