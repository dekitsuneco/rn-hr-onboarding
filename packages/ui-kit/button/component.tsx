import { AppActivityIndicator } from '../activity-indicator';
import { AppText, TextTheme } from '../text';
import { createStyles, variables } from '../styles';
import React, { ReactElement, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  theme?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'small';
  children?: React.ReactNode;
}

export function AppButton({
  title,
  style: elementStyle = {},
  isDisabled,
  isLoading,
  theme: mode = 'primary',
  size = 'default',
  children,
  ...restProps
}: Props): ReactElement {
  const renderedContent = useMemo(() => {
    if (isLoading) {
      return <AppActivityIndicator
        size={'small'}
        color={textStyle[mode].color}
        style={style.activityIndicator} />;
    }

    return title ? (
      <AppText
        style={[textStyle.button, textStyle[mode], isDisabled && disabledTextStyle[mode]]}
        theme={size === 'default' ? TextTheme.MEDIUM : TextTheme.SMALL}>
        {/* // TODO Leading Icon */}
        {title}
        {children}
        {/* // TODO Trailing Icon */}
      </AppText>
    ) : (
      children
    );
  }, [isDisabled, isLoading, theme, size, title, children]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[style.button, style[size], style[mode], isDisabled && disabledStyle[mode], elementStyle]}
      disabled={isDisabled}
      {...restProps}>
      {renderedContent}
    </TouchableOpacity>
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
    backgroundColor: variables.color.white,
    borderColor: variables.color.white
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
  tertiary: {}
});

const disabledTextStyle = createStyles({
  primary: {},
  secondary: {
    opacity: 0.4
  },
  tertiary: {
    opacity: 0.4
  }
});

const hoveredStyle = createStyles({
  primary: {
    backgroundColor: variables.color.primaryDark
  },
  secondary: {
    backgroundColor: variables.color.primary + '33'
  },
  tertiary: {}
});

const hoveredTextStyle = createStyles({
  primary: {},
  secondary: {
    color: variables.color.primaryDark
  },
  tertiary: {
    color: variables.color.primaryDark
  }
});

const pressedStyle = createStyles({
  primary: {
    backgroundColor: variables.color.primaryDarker
  },
  secondary: {
    backgroundColor: variables.color.primaryDarker + '33'
  },
  tertiary: {}
});

const pressedTextStyle = createStyles({
  primary: {},
  secondary: {
    color: variables.color.primaryDark
  },
  tertiary: {
    color: variables.color.primaryDarker
  }
});
