import { SearchInput } from '@shared/search';
import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import { createStyles, variables } from '@styles';
import { Switcher } from 'ui-kit/switcher';
import { useTranslation } from 'utils/i18n';
import { AnyStyle } from 'ui-kit/styles';

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

export function EmployeeListFlatListHeader(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.EMPLOYEES_LIST');
  const [currentTab, setCurrentTab] = useState('1'); //TODO temporary state for tab pick
  const handleTabPress = (tab: string): void => {
    setCurrentTab(tab);
  }; // TODO this is temporary function to handle and imitate switch in Switcher

  return (
    <View style={style.container}>
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
  );
}

const style = createStyles({
  container: {
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
  [`@media (min-width: ${variables.breakpoints.tablet})`]: {
    switcherWrapper: {
      marginHorizontal: 0,
      minWidth: '100%'
    },
    switcherContainer: {
      marginHorizontal: 0
    }
  } as AnyStyle,
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    container: {
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
    }
  } as AnyStyle
});
