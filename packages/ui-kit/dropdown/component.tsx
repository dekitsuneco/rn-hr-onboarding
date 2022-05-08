import React, { ReactElement, useState, useMemo } from 'react';
import { Menu, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import { ViewStyle, StyleProp, LayoutChangeEvent, ScrollView } from 'react-native';
import { AppButtonProps } from 'ui-kit/button';
import { DropdownTrigger, DropdownTriggerProps } from './components/dropdown-trigger';
import { DropdownOption, DropdownOptionProps } from './components/dropdown-option';
import { MenuTriggerProps } from 'react-native-popup-menu';
import { AppActivityIndicator } from '../activity-indicator';
import { createStyles, variables } from '../styles';

type Orientation = 'top' | 'bottom' | 'right' | 'left';
type Position = Orientation | 'auto';
type Alignment = Orientation | 'center';

interface DropdownProps<TValue> extends AppButtonProps {
  optionsProps: Array<DropdownOptionProps<TValue>>;
  style?: ViewStyle;
  renderTo?: Position;
  alignTo?: Alignment;
  hasAnchor?: boolean;
  triggerProps?: DropdownTriggerProps;
  triggerContainerStyle?: ViewStyle;
  renderTrigger?: (props: DropdownTriggerProps) => ReactElement;
}

export function Dropdown<TValue>({
  optionsProps,
  style: dropdownStyle = {},
  renderTo: placement = 'auto',
  alignTo: alignment = 'center',
  hasAnchor = true,
  triggerProps = {},
  triggerContainerStyle = {},
  renderTrigger = DropdownTrigger,
  isLoading
}: DropdownProps<TValue>): ReactElement {
  const [buttonHeight, setButtonHeight] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);

  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);

  const anchorStyle = useMemo((): StyleProp<ViewStyle> => (hasAnchor ? {} : { opacity: 0 }), [hasAnchor]);

  const offsetStyle = useMemo((): ViewStyle => {
    let offset = 0;

    const isHorizontal = (value: Orientation): boolean => ['top', 'bottom'].includes(value);

    const isPlacedVertically = placement !== 'auto' && isHorizontal(placement);
    const isAlignedVertically = alignment !== 'center' && isHorizontal(alignment);

    if (isPlacedVertically && !isAlignedVertically) {
      offset = (dropdownWidth - buttonWidth) / 2;
    }

    if (!isPlacedVertically && isAlignedVertically) {
      offset = (dropdownHeight - buttonHeight) / 2;
    }

    return offset === 0 ? {} : { [alignment]: offset };
  }, [placement, alignment, buttonWidth, dropdownWidth, buttonHeight, dropdownHeight]);

  const menuOptionsStyle = {
    optionsContainer: {
      ...offsetStyle,
      ...dropdownStyle
    }
  };

  const handleLayoutChange =
    (setWidth: React.Dispatch<React.SetStateAction<number>>, setHeight: React.Dispatch<React.SetStateAction<number>>) => (event: LayoutChangeEvent): void => {
      const { width, height } = event.nativeEvent.layout;

      setWidth(width);
      setHeight(height);
    };

  const dropdownOptions = useMemo(
    (): Array<JSX.Element> => optionsProps.map(({ title, ...restProps }) => <DropdownOption
      key={title}
      title={title}
      {...restProps} />),
    [optionsProps]
  );

  return (
    <Menu
      renderer={renderers.Popover}
      rendererProps={{
        placement,
        anchorStyle
      }}>
      <MenuTrigger
        customStyles={{
          triggerOuterWrapper: triggerContainerStyle,
          TriggerTouchableComponent: (props: MenuTriggerProps) => renderTrigger({ ...props, ...triggerProps }),
          triggerTouchable: {
            onLayout: handleLayoutChange(setButtonWidth, setButtonHeight)
          }
        }}
      />
      <MenuOptions customStyles={menuOptionsStyle}>
        {isLoading ? (
          <AppActivityIndicator style={style.activityIndicator} color={variables.color.primary} />
        ) : (
          <ScrollView onLayout={handleLayoutChange(setDropdownWidth, setDropdownHeight)}>{dropdownOptions}</ScrollView>
        )}
      </MenuOptions>
    </Menu>
  );
}

const style = createStyles({
  activityIndicator: {
    paddingVertical: 5
  }
});
