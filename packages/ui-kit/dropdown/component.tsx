import React, { ReactElement, useState, useMemo } from 'react';
import { Menu, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import { View, ViewStyle, StyleProp, LayoutChangeEvent } from 'react-native';
import { AppButtonProps } from 'ui-kit/button';
import { DropdownTrigger, DropdownTriggerProps } from 'ui-kit/dropdown-trigger';
import { DropdownOption, DropdownOptionProps } from 'ui-kit/dropdown-option';
import { MenuTriggerProps } from 'react-native-popup-menu';

type Position = 'top' | 'bottom' | 'left' | 'right' | 'auto';
type HorizontalAlignment = 'center' | 'left' | 'right';
type VerticalAlignment = 'center' | 'top' | 'bottom';

interface DropdownProps extends AppButtonProps {
  triggerProps?: DropdownTriggerProps; //!
  renderTrigger?: (props: DropdownTriggerProps) => ReactElement; //!
  triggerContainerStyle?: ViewStyle; //!
  dropdownStyle?: ViewStyle;
  position?: Position;
  alignHorizontallyTo?: HorizontalAlignment;
  alignVerticallyTo?: VerticalAlignment;
  withAnchor?: boolean;
  optionsInfo: Array<DropdownOptionProps>;
}

export function Dropdown({
  //buttonStyle = {},
  triggerContainerStyle = {},
  triggerProps = {},
  renderTrigger = DropdownTrigger,
  dropdownStyle = {},
  position = 'auto',
  alignHorizontallyTo = 'center',
  alignVerticallyTo = 'center',
  withAnchor = true,
  optionsInfo
}: DropdownProps): ReactElement {
  const [buttonHeight, setButtonHeight] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);

  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);

  const displacementStyle = useMemo((): ViewStyle => {
    let offsetStyle = {};

    const isInVerticalPosition = position === 'top' || position === 'bottom';
    const isInHorizontalalPosition = position === 'left' || position === 'right';

    if (isInVerticalPosition && alignHorizontallyTo !== 'center') {
      const offset = (dropdownWidth - buttonWidth) / 2;

      offsetStyle = { [alignHorizontallyTo]: offset };
    }

    if (isInHorizontalalPosition && alignVerticallyTo !== 'center') {
      const offset = (dropdownHeight - buttonHeight) / 2;

      offsetStyle = { [alignVerticallyTo]: offset };
    }

    return offsetStyle;
  }, [position, alignHorizontallyTo, alignVerticallyTo, buttonWidth, dropdownWidth, buttonHeight, dropdownHeight]);

  const anchorStyle = useMemo((): StyleProp<ViewStyle> => {
    return withAnchor ? {} : { opacity: 0 };
  }, [withAnchor]);

  const menuOptionsStyle = {
    optionsContainer: {
      ...displacementStyle,
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
    (): Array<JSX.Element> => optionsInfo.map((props, index) => {
      return <DropdownOption key={index} {...props} />;
    }),
    [optionsInfo]
  );

  return (
    <Menu
      renderer={renderers.Popover}
      rendererProps={{
        placement: position,
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

      {/*<MenuTrigger
        customStyles={{
          triggerOuterWrapper: {
            ...buttonStyle
          },
          TriggerTouchableComponent: DropdownTrigger,
          triggerTouchable: {
            ...restProps,
            style: buttonStyle,
            onLayout: handleLayoutChange(setButtonWidth, setButtonHeight)
          }
        }}
      />*/}

      <MenuOptions customStyles={menuOptionsStyle}>
        <View onLayout={handleLayoutChange(setDropdownWidth, setDropdownHeight)}>{dropdownOptions}</View>
      </MenuOptions>
    </Menu>
  );
}
