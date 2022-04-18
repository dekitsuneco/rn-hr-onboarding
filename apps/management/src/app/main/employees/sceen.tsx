import { createStyles } from '@styles';
import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import { Switcher } from 'ui-kit/switcher';

const switcherItems = [
  {
    key: '1',
    title: 'All'
  },
  {
    key: '2',
    title: 'Onboarding'
  },
  {
    key: '3',
    title: 'Pending'
  },
  {
    key: '4',
    title: 'Completed'
  },
  {
    key: '5',
    title: 'HR Stuff'
  }
]; //TODO This is temporary array of items for Switcher component.

export function EmployeesScreen(): ReactElement {
  const [current, setCurrent] = useState('1');
  const handlePress = (item: string): void => {
    setCurrent(item);
  }; // TODO this is temporary function to handle and imitate switch in Switcher

  return (
    <View style={style.container}>
      <Switcher
        containerStyle={{ marginHorizontal: -16 }}
        wrapperStyle={{ marginHorizontal: 16 }}
        items={switcherItems}
        current={current}
        onItemSelect={handlePress}
      />
    </View>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  }
});
