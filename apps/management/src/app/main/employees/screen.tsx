import { commonStyle, createStyles, variables } from '@styles';
import React, { ReactElement, useEffect, useMemo, Fragment } from 'react';
import { FlatList } from 'react-native';
import { EmployeeItem, EmployeeListFlatListFooter, EmployeeListFlatListHeader } from './shared/components';
import { AnyStyle } from 'ui-kit/styles';
import { employeesScreenFacade } from './facade';
import { AppActivityIndicator } from 'ui-kit/activity-indicator';

const perPage = 2;

export function EmployeesListScreen(): ReactElement {
  const { items, isLoading, pagination } = employeesScreenFacade;

  const handlePageSelect = (page: number): void => {
    employeesScreenFacade.loadItems(page, true);
  };

  const handleShowMorePress = (): void => {
    employeesScreenFacade.loadItems(pagination.currentPage + 1);
  };

  const memoizedFooter = useMemo(() => {
    return (
      <Fragment>
        {pagination.lastPage > 1 && (
          <EmployeeListFlatListFooter
            currentPage={pagination.currentPage}
            numberOfPages={pagination.lastPage}
            isLoading={isLoading}
            onPageSelect={handlePageSelect}
            onShowMorePress={handleShowMorePress}
          />
        )}
      </Fragment>
    );
  }, [pagination.lastPage, isLoading, pagination.currentPage]);

  useEffect(() => {
    handlePageSelect(1);
  }, []);

  useEffect(() => {
    employeesScreenFacade.changeFilter({ perPage });
  }, []);

  return (
    <FlatList
      ListEmptyComponent={() => (
        <Fragment>{isLoading && <AppActivityIndicator color={variables.color.primary} />}</Fragment>
      )}
      showsVerticalScrollIndicator={false}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={[commonStyle.wrapper, style.container]}
      renderItem={({ item }) => <EmployeeItem item={item} />}
      ListHeaderComponent={EmployeeListFlatListHeader}
      ListFooterComponent={memoizedFooter}
      ListFooterComponentStyle={style.footer}
    />
  );
}

const style = createStyles({
  container: {
    backgroundColor: variables.color.background,
    paddingTop: 16,
    flexGrow: 1
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    container: {
      paddingTop: 40
    }
  } as AnyStyle
});
