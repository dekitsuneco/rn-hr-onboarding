import { variables } from '@styles';
import React from 'react';
import { FlatList, View } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { OnboardingHeader, ScriptCardItem } from './shared/components';

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

export function OnboardingScreen(): JSX.Element {
  return (
    <View style={style.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.flatList}
        keyExtractor={(item) => item.id}
        data={fakeScriptData}
        renderItem={ScriptCardItem}
        ListHeaderComponent={OnboardingHeader}
      />
    </View>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    backgroundColor: variables.color.white
  },
  flatList: {
    paddingBottom: 100
  }
});
