import { variables } from '@styles';
import React, { ReactElement } from 'react';
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

  const handleNextBtnPress = (): void => {
    if (current < numberOfPages - 1) {
      onPageSelect(current + 1);
    }
  };

  return (
    <View style={style.container}>
      {[...Array(numberOfPages)].map((_, page) => (
        <View key={page}>
          <AppButton
            style={style.pageButton}
            theme={current === page ? 'secondary' : 'tertiary'}
            onPress={() => {
              onPageSelect(page);
            }}>
            {page + 1}
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
