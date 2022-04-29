import { commonStyle, createStyles, variables } from '@styles';
import React, { ReactElement, useEffect, useCallback, useState, useMemo, Fragment } from 'react';
import { FlatList } from 'react-native';
import { EmployeeItem, EmployeeListFlatListFooter, EmployeeListFlatListHeader } from './shared/components';
import { AnyStyle } from 'ui-kit/styles';
import { employeesScreenFacade } from './facade';
import { AppActivityIndicator } from 'ui-kit/activity-indicator';

const perPage = 2;

export function EmployeesListScreen(): ReactElement {
  const { items, isLoading, pagination, itemsToShow } = employeesScreenFacade;
  const [page, setPage] = useState(1);
  const [showMoreNumber, setShowMoreNumber] = useState(0);

  const handlePageSelect = (page: number): void => {
    setShowMoreNumber(0);
    setPage(page);
  };

  const handleShowMorePress = (): void => {
    if (page < pagination.lastPage) {
      setPage(page + 1);
      setShowMoreNumber(showMoreNumber + perPage);
    }
  };

  const memoizedFooter = useCallback(() => {
    return (
      <Fragment>
        {pagination.lastPage > 1 && (
          <EmployeeListFlatListFooter
            currentPage={page}
            numberOfPages={pagination.lastPage}
            isLoading={isLoading}
            onPageSelect={handlePageSelect}
            handleShowMorePress={handleShowMorePress}
          />
        )}
      </Fragment>
    );
  }, [page, pagination.lastPage, isLoading]);

  const memoizedItemsToShow = useMemo(() => {
    return -itemsToShow(pagination, showMoreNumber, perPage);
  }, [items]);

  useEffect(() => {
    employeesScreenFacade.loadItems(page);
  }, [page]);

  useEffect(() => {
    employeesScreenFacade.changeFilter({ perPage });
  }, []);

  return (
    <FlatList
      ListEmptyComponent={() => <AppActivityIndicator color={variables.color.primary} />}
      showsVerticalScrollIndicator={false}
      data={items.slice(memoizedItemsToShow)}
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
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
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
