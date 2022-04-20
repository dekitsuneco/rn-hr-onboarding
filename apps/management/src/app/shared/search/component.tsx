import { variables } from '@styles';
import React from 'react';
import { Icon } from 'ui-kit/icon';
import { AnyStyle, createStyles } from 'ui-kit/styles';
import { AppTextInput, AppTextInputProps } from 'ui-kit/text-input';

export function SearchInput({ placeholder, ...restProps }: AppTextInputProps): JSX.Element {
  return (
    <AppTextInput
      style={style.textInput}
      placeholder={placeholder}
      iconType='leading'
      icon={<Icon name='search' stroke={variables.color.gray} />}
      {...restProps}
    />
  );
}

const style = createStyles({
  textInput: {
    fontFamily: variables.fontFamily.regular
  },
  [`@media (max-width: ${variables.breakpoints.tablet})`]: {
    searchInput: {
      maxWidth: '100%'
    }
  } as AnyStyle
});
