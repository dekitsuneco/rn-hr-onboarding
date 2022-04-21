import { AppActivityIndicator } from '../activity-indicator';
import { AppText, TextTheme } from '../text';
import { createStyles, variables } from '../styles';
import React, { ReactElement, useMemo } from 'react';
import { PressableProps, Pressable, ViewStyle } from 'react-native';

export type ButtonTheme = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'default' | 'small';

interface Props extends PressableProps {
  title?: string;
  style?: ViewStyle;
  isDisabled?: boolean;
  isLoading?: boolean;
  theme?: ButtonTheme;
  size?: ButtonSize;
  children?: React.ReactNode;
}

export function AppButton({
  title,
  style: elementStyle = {},
  isDisabled,
  isLoading,
  theme = 'primary',
  size = 'default',
  children,
  ...restProps
}: Props): ReactElement {
  const renderedContent = useMemo(() => {
    if (isLoading) {
      return <AppActivityIndicator
        size={'small'}
        color={textStyle[theme].color}
        style={style.activityIndicator} />;
    }

    return !title && children;
  }, [isLoading, theme, children]);

  return (
    <Pressable
      style={({ pressed }) => [
        style.button,
        style[theme],
        style[size],
        elementStyle,
        isDisabled && disabledStyle[theme],
        pressed && pressedStyle[theme]
      ]}
      disabled={isDisabled}
      {...restProps}>
      {({ pressed }) => renderedContent || (
        <AppText
          style={[
            textStyle.button,
            textStyle[theme],
            isDisabled && disabledTextStyle[theme],
            pressed && pressedTextStyle[theme]
          ]}
          theme={size === 'default' ? TextTheme.MEDIUM : TextTheme.SMALL}>
          {title}
          {children}
        </AppText>
      )
      }
    </Pressable>
  );
}

const style = createStyles({
  button: {
    borderRadius: 12,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center'
  },
  default: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  small: {
    paddingVertical: 7,
    paddingHorizontal: 16
  },
  primary: {
    backgroundColor: variables.color.primary,
    borderColor: variables.color.primary
  },
  secondary: {
    backgroundColor: variables.color.primary + '1A',
    borderColor: variables.color.primary + '1A'
  },
  tertiary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  activityIndicator: {
    width: 30,
    height: 30
  }
});

const textStyle = createStyles({
  button: {
    fontFamily: variables.fontFamily.sfProTextSemiBold,
    fontWeight: '600',
    textAlign: 'center'
  },
  primary: {
    color: variables.color.white
  },
  secondary: {
    color: variables.color.primary
  },
  tertiary: {
    color: variables.color.primary
  }
});

const disabledStyle = createStyles({
  primary: {
    backgroundColor: variables.color.gray,
    borderColor: variables.color.gray
  },
  secondary: {
    backgroundColor: variables.color.primary + '12',
    borderColor: variables.color.primary + '12'
  },
  tertiary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  }
});

const disabledTextStyle = createStyles({
  primary: {
    color: variables.color.white
  },
  secondary: {
    opacity: 0.4
  },
  tertiary: {
    opacity: 0.4
  }
});

const pressedStyle = createStyles({
  primary: {
    backgroundColor: variables.color.primaryDarker,
    borderColor: variables.color.primaryDarker
  },
  secondary: {
    backgroundColor: variables.color.primaryDarker + '33',
    borderColor: variables.color.primaryDarker + '33'
  },
  tertiary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  }
});

const pressedTextStyle = createStyles({
  primary: {
    color: variables.color.white
  },
  secondary: {
    color: variables.color.primaryDark
  },
  tertiary: {
    color: variables.color.primaryDarker
  }
});
