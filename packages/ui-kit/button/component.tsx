import { AppActivityIndicator } from '../activity-indicator';
import { AppText, TextTheme } from '../text';
import { createStyles, variables } from '../styles';
import React, { ReactElement, useMemo, ReactNode } from 'react';
import { TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { HorizontalGap } from 'ui-kit/horizontal-gap';
import { useScreenDimensions } from 'modules/use-screen-dimensions';

type ButtonTheme = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'default' | 'small';

interface Props extends TouchableHighlightProps {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  gap?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  theme?: ButtonTheme;
  size?: ButtonSize;
  children?: React.ReactNode;
}

export function AppButton({
  title,
  leftIcon,
  rightIcon,
  gap,
  style: elementStyle = {},
  isDisabled,
  isLoading,
  theme = 'primary',
  size = 'default',
  children,
  ...restProps
}: Props): ReactElement {
  const { isTablet } = useScreenDimensions();
  const defaultGap = 10;
  const renderedContent = useMemo(() => {
    if (isLoading) {
      return <AppActivityIndicator
        size={'small'}
        color={textStyle[theme].color}
        style={style.activityIndicator} />;
    }

    const text = (leftIcon || rightIcon ? isTablet : true) && (
      <AppText
        style={[textStyle.text, textStyle[theme], isDisabled && disabledTextStyle[theme]]}
        theme={size === 'default' ? TextTheme.MEDIUM : TextTheme.SMALL}>
        {title}
        {children}
      </AppText>
    );

    return (
      <HorizontalGap gap={gap || defaultGap} style={textStyle.container}>
        {leftIcon}
        {text}
        {rightIcon}
      </HorizontalGap>
    );
  }, [isDisabled, isLoading, theme, size, title, children]);

  return (
    <TouchableHighlight
      underlayColor={pressedStyle[theme].backgroundColor}
      style={[style.button, style[theme], style[size], isDisabled && disabledStyle[theme], elementStyle]}
      disabled={isDisabled}
      {...restProps}>
      {renderedContent}
    </TouchableHighlight>
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
  },
  [`@media (max-width: ${variables.breakpoints.tablet})`]: {
    default: {
      paddingVertical: 12,
      paddingHorizontal: 12
    }
  }
});

const textStyle = createStyles({
  text: {
    fontFamily: variables.fontFamily.sfProTextSemiBold,
    fontWeight: '600'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
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
