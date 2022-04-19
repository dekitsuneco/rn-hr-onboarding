import React, { ReactElement } from 'react';
import { ScriptCard } from 'ui-kit/script-card';
import { createStyles } from '@styles';
import { useTranslation } from 'utils/i18n';
import { ScriptCardAction } from '../script-card-action/component';

interface Props {
  item: {
    id: string;
    title: string;
    tasksTotal: number;
    completed: number;
    status: string;
    logo: string;
  };
}

export function ScriptCardItem({ item }: Props): ReactElement {
  const transtlate = useTranslation('MAIN.ONBOARDING.SHARED.SCRIPT_CARD_LIST');

  return (
    <ScriptCard
      key={item.id}
      style={style.container}
      imageURL={item.logo}
      contentRight={<ScriptCardAction status={item.status} taskID={item.id} />}
      title={item.title}
      subtitle={
        item.completed > 0
          ? transtlate('TEXT_TASKS_COMPLETE', { tasksTotal: item.tasksTotal, completed: item.completed })
          : transtlate('TEXT_TASKS', { tasksTotal: item.tasksTotal })
      }
      isBlocked={item.status === 'blocked'}
    />
  );
}

const style = createStyles({
  container: {
    marginBottom: 16
  }
});
