import { AppActivityIndicator } from '../activity-indicator';
import { AppText, TextTheme } from '../text';
import { AnyStyle, createStyles, variables, commonStyle } from '../styles';
import React, { ReactElement, useMemo } from 'react';
import { TouchableHighlight, TouchableHighlightProps, View } from 'react-native';
import { useScreenDimensions } from 'modules/use-screen-dimensions';

type ButtonTheme = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'default' | 'small';

interface Props extends TouchableHighlightProps {
  title?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
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
  style: elementStyle = {},
  isDisabled,
  isLoading,
  theme = 'primary',
  size = 'default',
  children,
  ...restProps
}: Props): ReactElement {
  const { isTablet } = useScreenDimensions();
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
      <View style={[textStyle.container, commonStyle.flexCenter]}>
        <View style={text && leftIcon && textStyle.leftIcon}>{leftIcon}</View>
        <View>{text}</View>
        <View style={text && rightIcon && textStyle.rightIcon}>{rightIcon}</View>
      </View>
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
  } as AnyStyle
});

const textStyle = createStyles({
  text: {
    fontFamily: variables.fontFamily.bold
  },
  container: {
    flexDirection: 'row'
  },
  leftIcon: {
    marginRight: 10
  },
  rightIcon: {
    marginLeft: 10
  },
  button: {
    fontFamily: variables.fontFamily.bold,
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
