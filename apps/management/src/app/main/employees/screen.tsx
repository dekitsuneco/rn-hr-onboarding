import { createStyles, variables } from '@styles';
import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import { Switcher } from 'ui-kit/switcher';
import { Employee } from './shared/models/employee';
import { SearchInput } from '@shared/search';
import { useTranslation } from 'utils/i18n';
import { EmployeeItem } from './shared/components';

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

const employee: Employee = {
  id: '1',
  name: 'Russel Sims',
  position: 'IOS Developer',
  phoneNumber: '+1 294 3947294',
  email: 'russel@mycompany.com',
  labels: ['Onboarding'],
  progress: 35,
  avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
};

export function EmployeesScreen(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES');
  const [current, setCurrent] = useState('1');

  const handlePress = (item: string): void => {
    setCurrent(item);
  }; // TODO this is temporary function to handle and imitate switch in Switcher

  return (
    <View style={style.container}>
      <View style={style.optionsContainer}>
        <SearchInput controlStyle={{ marginBottom: 10 }} placeholder={translate('INPUT_SEARCH_PLACEHOLDER')} />
        <Switcher
          containerStyle={{ marginHorizontal: -16 }}
          wrapperStyle={{ marginHorizontal: 16 }}
          items={switcherItems}
          current={current}
          onItemSelect={handlePress}
        />
      </View>
      <EmployeeItem
        avatar={employee.avatar}
        name={employee.name}
        position={employee.position}
        phoneNumber={employee.phoneNumber}
        email={employee.email}
        labels={employee.labels}
        progress={employee.progress}
        id={employee.id}
      />
    </View>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    backgroundColor: variables.color.white,
    paddingHorizontal: 16
  },
  optionsContainer: {
    marginTop: 16,
    marginBottom: 40
  }
});
