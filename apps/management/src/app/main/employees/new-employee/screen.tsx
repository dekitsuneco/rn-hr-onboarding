import { createStyles } from '@styles';
import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import { Switcher } from 'ui-kit/switcher';
import { SearchInput } from '@shared/search';
import { useTranslation } from 'utils/i18n';

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

export function NewEmployeeScreen(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.NEW_EMPLOYEE');
  const [current, setCurrent] = useState('1');

  const handlePress = (item: string): void => {
    setCurrent(item);
  }; // TODO this is temporary function to handle and imitate switch in Switcher

  return (
    <View style={style.container}>
      <SearchInput controlStyle={{ marginBottom: 10 }} placeholder={translate('INPUT_SEARCH_PLACEHOLDER')} />
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
    alignItems: 'center',
    paddingHorizontal: 16
  }
});
