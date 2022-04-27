import React from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { variables } from 'ui-kit/styles';
import { Dropdown } from 'ui-kit/dropdown';
import { DropdownOptionProps } from 'ui-kit/dropdown/components/dropdown-option';

export type ScriptsActionsMenuProps<TValue> = {
  optionProps: Array<DropdownOptionProps<TValue>>;
};

export function ScriptsActionsMenu<TValue>(props: ScriptsActionsMenuProps<TValue>): JSX.Element {
  return (
    <Dropdown
      alignTo='right'
      optionsProps={props.optionProps}
      renderTrigger={(props) => (
        <View>
          <AppButton
            isTextHidden={true}
            theme='secondary'
            leftIcon={<Icon name='moreSquare' stroke={variables.color.primary} />}
            {...props}
          />
        </View>
      )}
    />
  );
}
