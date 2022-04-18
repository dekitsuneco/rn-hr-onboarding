import { variables } from '@styles';
import React from 'react';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { AppTextInput } from 'ui-kit/text-input';

interface SearchProps {
  placeholder?: string;
}

export function Search({ placeholder, ...restProps }: SearchProps): JSX.Element {
  return (
    <AppTextInput
      placeholder={placeholder}
      controlStyle={style.searchInput}
      iconType='leading'
      icon={<Icon name='search' stroke={variables.color.gray} />}
      {...restProps}
    />
  );
}

const style = createStyles({
  searchInput: {
    maxWidth: 320
  },
  [`@media (max-width: ${variables.breakpoints.tablet})`]: {
    searchInput: {
      maxWidth: '100%'
    }
  }
});
