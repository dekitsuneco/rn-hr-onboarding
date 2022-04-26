import { Pagination } from '@shared/pagination';
import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { createStyles, variables } from '@styles';
import { AnyStyle } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

export function EmployeeListFlatListFooter(): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.EMPLOYEES_LIST');
  const [currentPage, setCurrentPage] = useState(0); //TODO temporary state for page pick

  const handlePagePress = (page: number): void => {
    setCurrentPage(page);
  }; // TODO this is temporary function to handle and imitate page pick

  return (
    <View style={style.container}>
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
  );
}

const style = createStyles({
  container: {
    paddingTop: 40,
    paddingBottom: 53,
    alignItems: 'center'
  },
  showMoreButtonContainer: {
    marginBottom: 40
  },
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    container: {
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
