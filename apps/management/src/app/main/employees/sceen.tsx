import { createStyles } from '@styles';
import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import { Switcher } from 'ui-kit/switcher';

const switcherItems = ['All', 'Onboarding', 'Pending', 'Completed', 'HR Stuff']; //TODO This is temporary array of items for Switcher component.

export function EmployeesScreen(): ReactElement {
  const [current, setCurrent] = useState('All');
  const handlePress = (item: string): void => {
    setCurrent(item);
  }; // TODO this is temporary function to handle and imitate switch in Switcher

  return (
    <View style={style.container}>
      <Switcher
        items={switcherItems}
        current={current}
        onItemSelect={handlePress} />
    </View>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center'
  }
});
