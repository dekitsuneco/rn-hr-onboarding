import { commonStyle, variables } from '@styles';
import React from 'react';
import { FlatList } from 'react-native';
import { createStyles } from '@styles';
import { OnboardingHeader, ScriptCardItem } from './shared/components';
import { onboardingFacade } from './facade';
import { Script } from 'features/data';

const fakeScriptData: Array<Script> = [
  {
    id: '1',
    title: 'Office Intro – Omsk',
    tasksTotal: 3,
    completed: 3,
    status: 'done',
    logo: 'https://i.pinimg.com/originals/b1/97/cb/b197cb2c35746b1a9ccba62d3fd3da53.jpg',
    tasks: [
      {
        id: '1',
        title: 'Essentials',
        isCompleted: true,
        answerType: 'radio',
        answers: []
      },
      {
        id: '12',
        title: 'Video Intro',
        isCompleted: false,
        answerType: 'radio',
        answers: [
          {
            title: 'Slack',
            isCorrect: false,
            id: '112'
          },
          {
            title: 'Telegram',
            isCorrect: true,
            id: '231'
          },
          {
            title: 'Whatsapp',
            isCorrect: false,
            id: '351'
          }
        ]
      },
      {
        id: '122',
        title: 'Coding Environment and Software',
        isCompleted: false,
        answerType: 'radio',
        answers: []
      }
    ]
  },
  {
    id: '2',
    title: 'Work Tools',
    tasksTotal: 2,
    completed: 1,
    status: 'process',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLTWwBXHqH8wiMcz9dBpLK7X_Vwl2SVFKTtA-sKA=s900-c-k-c0x00ffffff-no-rj',
    tasks: [
      {
        id: '123',
        title: 'IDEs',
        isCompleted: true,
        answerType: 'radio',
        answers: []
      },
      {
        id: '1234',
        title: 'Video Intro',
        isCompleted: false,
        answerType: 'radio',
        answers: []
      }
    ]
  },
  {
    id: '3',
    title: 'Meet Your Colleagues',
    tasksTotal: 3,
    completed: 0,
    status: 'blocked',
    logo: 'https://learncode.net/wp-content/uploads/2018/07/React-native.jpg',
    tasks: [
      {
        id: '12345',
        title: 'Linters',
        isCompleted: false,
        answerType: 'radio',
        answers: []
      },
      {
        id: '12356',
        title: 'Debugging Tools',
        isCompleted: false,
        answerType: 'radio',
        answers: []
      },
      {
        id: '123567',
        title: 'Internal Solutions',
        isCompleted: false,
        answerType: 'radio',
        answers: []
      }
    ]
  }
]; //TODO This is temporary fake data

export function OnboardingScreen(): JSX.Element {
  const { profile } = onboardingFacade;

  return (
    <FlatList
      style={style.screen}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[commonStyle.wrapper, style.container]}
      keyExtractor={(item) => item.id}
      data={fakeScriptData}
      renderItem={({ item }) => (
        <ScriptCardItem
          item={item}
          onCardPress={() => {
            onboardingFacade.navigateToScript(item);
          }}
        />
      )}
      ListHeaderComponent={() => <OnboardingHeader name={profile?.firstName} />}
    />
  );
}

const style = createStyles({
  screen: {
    backgroundColor: variables.color.backgroundSecondary
  },
  container: {
    paddingBottom: 100,
    backgroundColor: variables.color.backgroundSecondary
  }
});
