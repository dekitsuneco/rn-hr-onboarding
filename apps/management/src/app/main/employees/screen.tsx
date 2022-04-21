import { commonStyle, createStyles, variables } from '@styles';
import React, { ReactElement, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Switcher } from 'ui-kit/switcher';
import { Employee } from './shared/models/employee';
import { SearchInput } from '@shared/search';
import { useTranslation } from 'utils/i18n';
import { EmployeeItem } from './shared/components';
import { Pagination } from './shared/components/pagination/component';
import { AnyStyle } from 'ui-kit/styles';
import { AppButton } from 'ui-kit/button';

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
    labels: ['Onboarding', 'HR'],
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
    labels: ['Admin', 'You'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '6',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Admin', 'You'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  },
  {
    id: '7',
    name: 'Russel Sims',
    position: 'IOS Developer',
    phoneNumber: '+1 294 3947294',
    email: 'russel@mycompany.com',
    labels: ['Admin', 'You'],
    progress: 35,
    avatar: 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1'
  }
];

export function EmployeesListScreen(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.EMPLOYEES_LIST');
  const [currentTab, setCurrentTab] = useState('1'); //TODO temporary state for tab pick
  const [currentPage, setCurrentPage] = useState(0); //TODO temporary state for page pick

  const handleTabPress = (tab: string): void => {
    setCurrentTab(tab);
  }; // TODO this is temporary function to handle and imitate switch in Switcher

  const handlePagePress = (page: number): void => {
    setCurrentPage(page);
  }; // TODO this is temporary function to handle and imitate page pick

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={employees}
      keyExtractor={(item) => item.id}
      contentContainerStyle={[commonStyle.container, style.container]}
      renderItem={({ item }) => (
        <EmployeeItem
          avatar={item.avatar}
          name={item.name}
          position={item.position}
          phoneNumber={item.phoneNumber}
          email={item.email}
          labels={item.labels}
          progress={item.progress}
          id={item.id}
        />
      )}
      ListHeaderComponent={
        <View style={style.header}>
          <View style={style.inputContainer}>
            <SearchInput placeholder={translate('INPUT_SEARCH_PLACEHOLDER')} />
          </View>
          <Switcher
            items={switcherItems}
            current={currentTab}
            wrapperStyle={style.switcherWrapper}
            containerStyle={style.switcherContainer}
            onItemSelect={handleTabPress}
          />
        </View>
      }
      ListFooterComponent={
        <View style={style.footer}>
          <View style={style.showMoreButtonContainer}>
            <AppButton
              theme='tertiary'
              style={style.showMoreButton}
              title={translate('BUTTON_SHOW_MORE')} />
          </View>
          <Pagination
            numberOfPages={5}
            onPageSelect={handlePagePress}
            current={currentPage} />
        </View>
      }
    />
  );
}

const style = createStyles({
  container: {
    backgroundColor: variables.color.background,
    paddingTop: 16,
    paddingHorizontal: 16
  },
  header: {
    marginBottom: 24
  },
  switcherWrapper: {
    marginHorizontal: 16
  },
  switcherContainer: {
    marginHorizontal: -16
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16
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
    },
    switcherWrapper: {
      marginHorizontal: 0,
      minWidth: '100%'
    },
    switcherContainer: {
      marginHorizontal: 0
    }
  } as AnyStyle,
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    header: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    switcherWrapper: {
      minWidth: 0
    },
    inputContainer: {
      width: 320,
      marginBottom: 0,
      marginRight: 16
    },
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
