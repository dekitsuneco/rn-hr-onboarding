import React, { ReactElement, useMemo } from 'react';
import { createStyles } from '@styles';
import { AppText } from 'ui-kit/text';
import { Icon } from 'ui-kit/icon';
import { Card } from 'ui-kit/card';

interface Props {
  title: string;
  isCompleted: boolean;
}

export function TaskItem({ title, isCompleted }: Props): ReactElement {
  const renderedIcon = useMemo(() => {
    return isCompleted ? <Icon name='done' /> : <Icon name='continue' style={style.iconContinue} />;
  }, [isCompleted]);

  return (
    <Card style={style.container}>
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
