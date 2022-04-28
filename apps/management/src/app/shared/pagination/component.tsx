import { variables } from '@styles';
import React, { ReactElement, useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

interface Props {
  numberOfPages: number;
  current?: number;
  onPageSelect: (page: number) => void;
}

export function Pagination({ numberOfPages, current, onPageSelect }: Props): ReactElement {
  const translate = useTranslation('SHARED.PAGINATION');

  const [arrayOfShownPages, setArrayOfShownPages] = useState<Array<string | number>>([]);
  const arrayOfPages = Array.from({ length: numberOfPages }, (v, i) => i + 1);

  const handleNextBtnPress = (): void => {
    if (current < numberOfPages - 1) {
      onPageSelect(current + 1);
    }
  };

  useEffect(() => {
    let tempArrayOfShownPages: Array<string | number> = arrayOfPages;

    if (numberOfPages > 5) {
      if (current >= 1 && current <= 2) {
        tempArrayOfShownPages = [1, 2, 3, '...', numberOfPages];
      } else if (current > 2 && current < numberOfPages - 3) {
        const sliced = arrayOfPages.slice(current - 2, current + 1);
        tempArrayOfShownPages = [...sliced, '...', numberOfPages];
      } else if (current >= numberOfPages - 3) {
        const sliced = arrayOfPages.slice(numberOfPages - 5, numberOfPages);
        tempArrayOfShownPages = [...sliced];
      }
    }
    setArrayOfShownPages(tempArrayOfShownPages);
  }, [current]);

  return (
    <View style={style.container}>
      {arrayOfShownPages.map((page) => (
        <View key={page}>
          <AppButton
            style={style.pageButton}
            theme={current === page ? 'secondary' : 'tertiary'}
            onPress={() => {
              if (typeof page === 'number') {
                onPageSelect(page);
              }
            }}>
            {page}
          </AppButton>
        </View>
      ))}
      <View>
        <AppButton
          theme='tertiary'
          onPress={handleNextBtnPress}
          title={translate('BUTTON_NEXT')} />
      </View>
    </View>
  );
} // TODO add pagination functionality, when number of pages is more than 5.

const style = createStyles({
  container: {
    flexDirection: 'row'
  },
  itemText: {
    color: variables.color.primary
  },
  nextButton: {
    alignSelf: 'flex-start'
  },
  pageButton: {
    paddingHorizontal: 19
  }
});
