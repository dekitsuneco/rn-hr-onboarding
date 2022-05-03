import React, { ReactElement, useMemo } from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { PaginationArrow } from './components/pagination-arrow';
import { range } from 'lodash';

interface Props {
  numberOfPages: number;
  current?: number;
  onPageSelect: (page: number) => void;
}

export function Pagination({ numberOfPages, current, onPageSelect }: Props): ReactElement {
  const arrayOfPages = useMemo(() => {
    return range(1, numberOfPages + 1);
  }, [numberOfPages]);

  const arrayOfShownPages = useMemo(() => {
    let tempArrayOfShownPages: Array<string | number> = arrayOfPages;

    if (numberOfPages > 5) {
      if (current >= 1 && current <= 3) {
        tempArrayOfShownPages = [1, 2, 3, '...', numberOfPages];
      } else if (current > 2 && current < numberOfPages - 2) {
        tempArrayOfShownPages = [1, '...', current, '...', numberOfPages];
      } else if (current >= numberOfPages - 3) {
        const sliced = arrayOfPages.slice(numberOfPages - 3, numberOfPages);
        tempArrayOfShownPages = [1, '...', ...sliced];
      }
    }

    return tempArrayOfShownPages;
  }, [current, numberOfPages]);

  const handleNextPress = (): void => {
    if (current < numberOfPages) {
      onPageSelect(current + 1);
    }
  };

  const handlePrevPress = (): void => {
    if (current > 1) {
      onPageSelect(current - 1);
    }
  };

  return (
    <View style={style.container}>
      <PaginationArrow
        onPress={handlePrevPress}
        iconName='chevronLeft'
        isHidden={current === 1} />
      {arrayOfShownPages.map((page, index) => {
        if (typeof page !== 'number') {
          return (
            <View key={index} style={style.trailingIconContainer}>
              <Icon name='trailing' />
            </View>
          );
        } else {
          return (
            <View key={index}>
              <AppButton
                style={style.pageButton}
                theme={current === page ? 'secondary' : 'tertiary'}
                onPress={() => {
                  onPageSelect(page);
                }}>
                {page}
              </AppButton>
            </View>
          );
        }
      })}
      <PaginationArrow
        onPress={handleNextPress}
        iconName='chevronRight'
        isHidden={current === numberOfPages} />
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pageButton: {
    paddingHorizontal: 19
  },
  trailingIconContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
