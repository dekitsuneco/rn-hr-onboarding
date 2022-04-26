import { commonStyle, createStyles, variables } from '@styles';
import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { Employee } from './shared/models/employee';
import { EmployeeItem, EmployeeListFlatListFooter, EmployeeListFlatListHeader } from './shared/components';
import { AnyStyle } from 'ui-kit/styles';

const employees: Array<Employee> = [
  {
    id: '1',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Onboarding'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '2',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Onboarding'],
    role: 'HR',
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '3',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Onboarding', 'Completed'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '4',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Pending'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '5',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Onboarding'],
    role: 'Admin',
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '6',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Completed'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '7',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Pending', 'Onboarding'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  }
];

export function EmployeesListScreen(): ReactElement {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={employees}
      keyExtractor={(item) => item.id}
      contentContainerStyle={[commonStyle.wrapper, style.container]}
      renderItem={({ item }) => <EmployeeItem item={item} />}
      ListHeaderComponent={EmployeeListFlatListHeader}
      ListFooterComponent={EmployeeListFlatListFooter}
    />
  );
}

const style = createStyles({
  container: {
    backgroundColor: variables.color.background,
    paddingTop: 16
  },
  footer: {
    paddingTop: 40,
    paddingBottom: 53,
    alignItems: 'center'
  },
  showMoreButtonContainer: {
    marginBottom: 40
  },
  [`@media (min-width: ${variables.breakpoints.tablet})`]: {
    container: {
      paddingTop: 40
    }
  } as AnyStyle,
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    footer: {
      paddingBottom: 42,
      alignItems: 'flex-start'
    },
    showMoreButtonContainer: {
      alignSelf: 'flex-start'
    },
    showMoreButton: {
      paddingHorizontal: 8
    }
  } as AnyStyle
});
