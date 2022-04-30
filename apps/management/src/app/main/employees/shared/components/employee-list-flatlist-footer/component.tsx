import { Pagination } from '@shared/pagination';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { createStyles, variables } from '@styles';
import { AnyStyle } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';
import { AppActivityIndicator } from 'ui-kit/activity-indicator';

interface Props {
  currentPage: number;
  numberOfPages: number;
  onPageSelect: (page: number) => void;
  handleShowMorePress: () => void;
  isLoading?: boolean;
}

export function EmployeeListFlatListFooter({
  currentPage,
  numberOfPages,
  onPageSelect,
  handleShowMorePress,
  isLoading
}: Props): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.EMPLOYEES_LIST');

  return (
    <View style={style.container}>
      <View style={style.showMoreButtonContainer}>
        <AppButton
          onPress={handleShowMorePress}
          theme='tertiary'
          style={style.showMoreButton}
          title={translate('BUTTON_SHOW_MORE')}
        />
      </View>
      {isLoading && (
        <View style={style.indicatorContainer}>
          <AppActivityIndicator color={variables.color.primary} />
        </View>
      )}
      <Pagination
        numberOfPages={numberOfPages}
        onPageSelect={onPageSelect}
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
  indicatorContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 10
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
