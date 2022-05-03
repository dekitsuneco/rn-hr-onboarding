import { createStyles } from '@styles';
import React, { ReactElement, useMemo } from 'react';
import { Card } from 'ui-kit/card';
import { Icon } from 'ui-kit/icon';
import { AppText } from 'ui-kit/text';

interface Props {
  title: string;
  isCompleted: boolean;
  onPress?: () => void;
}

export function TaskItem({ title, isCompleted, onPress }: Props): ReactElement {
  const renderedIcon = useMemo(() => {
    return isCompleted ? <Icon name='done' /> : <Icon name='chevronRight' style={style.iconContinue} />;
  }, [isCompleted]);

  return (
    <Card style={style.container} onPress={onPress}>
      <AppText>{title}</AppText>
      {renderedIcon}
    </Card>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContinue: {
    marginRight: 2.25
  }
});
