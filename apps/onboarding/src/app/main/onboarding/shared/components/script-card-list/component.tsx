import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { ScriptCard } from 'ui-kit/script-card';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';
import { ScriptCardButton } from '..';

const fakeScriptData = [
  {
    id: '1',
    title: 'Office Intro – Omsk',
    tasksTotal: 10,
    completed: 10,
    status: 'done',
    logo: 'https://i.pinimg.com/originals/b1/97/cb/b197cb2c35746b1a9ccba62d3fd3da53.jpg'
  },
  {
    id: '2',
    title: 'Work Tools',
    tasksTotal: 8,
    completed: 1,
    status: 'process',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLTWwBXHqH8wiMcz9dBpLK7X_Vwl2SVFKTtA-sKA=s900-c-k-c0x00ffffff-no-rj'
  },
  {
    id: '3',
    title: 'Meet Your Colleagues',
    tasksTotal: 10,
    completed: 0,
    status: 'blocked',
    logo: 'https://learncode.net/wp-content/uploads/2018/07/React-native.jpg'
  }
]; //TODO This is temporary fake data

export function ScriptCardList(): ReactElement {
  const transtlate = useTranslation('MAIN.ONBOARDING.SHARED.SCRIPT_CARD_LIST');

  return (
    <View style={style.container}>
      {fakeScriptData.map((script) => (
        <ScriptCard
          key={script.id}
          uri={script.logo}
          button={<ScriptCardButton status={script.status} taskId={script.id} />}
          title={script.title}
          subTitle={
            script.completed > 0
              ? transtlate('TEXT_TASKS_COMPLETE', { tasksTotal: script.tasksTotal, completed: script.completed })
              : transtlate('TEXT_TASKS', { tasksTotal: script.tasksTotal })
          }
          blocked={script.status === 'blocked'}
        />
      ))}
      <View style={style.bottomBlock} />
    </View>
  );
}

const style = createStyles({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  bottomBlock: {
    height: 100
  }
});
