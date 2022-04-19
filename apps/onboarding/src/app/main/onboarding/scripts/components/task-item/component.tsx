import React, { ReactElement, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStyles, variables } from '@styles';
import { AppText } from 'ui-kit/text';
import { Icon } from 'ui-kit/icon';

interface Props {
  title: string;
  isCompleted: boolean;
}

export function TaskItem({ title, isCompleted }: Props): ReactElement {
  const renderedIcon = useMemo(() => {
    return isCompleted ? <Icon name='done' /> : <Icon name='continue' style={style.iconContinue} />;
  }, [isCompleted]);

  return (
    <TouchableOpacity style={style.container}>
      <AppText>{title}</AppText>
      {renderedIcon}
    </TouchableOpacity>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginBottom: 16,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: 'white'
  },
  iconContinue: {
    marginRight: 2.25
  }
});
