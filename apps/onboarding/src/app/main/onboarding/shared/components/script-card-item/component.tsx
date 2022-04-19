import React, { ReactElement } from 'react';
import { ScriptCard } from 'ui-kit/script-card';
import { createStyles } from '@styles';
import { ScriptCardAction } from '../script-card-action/component';
import { Script } from '@app/main/onboarding/scripts/models';
import { onboardingFacade } from '@app/main/onboarding/facade';

interface Props {
  item: Script;
  onCardPress?: () => void;
}

export function ScriptCardItem({ item, onCardPress }: Props): ReactElement {
  return (
    <ScriptCard
      key={item.id}
      style={style.container}
      imageURL={item.logo}
      contentRight={<ScriptCardAction status={item.status} taskID={item.id} />}
      title={item.title}
      subtitle={onboardingFacade.translateScriptProgress(item.tasksTotal, item.completed)}
      isBlocked={item.status === 'blocked'}
      onCardPress={onCardPress}
    />
  );
}

const style = createStyles({
  container: {
    marginBottom: 16
  }
});
