import { AppActivityIndicator } from '../activity-indicator';
import { AppText, TextTheme } from '../text';
import { AnyStyle, createStyles, variables, commonStyle } from '../styles';
import React, { ReactElement, useMemo } from 'react';
import { PressableProps, Pressable, ViewStyle, View } from 'react-native';
import { useScreenDimensions } from 'modules/use-screen-dimensions';

export type ButtonTheme = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'default' | 'small';

export interface AppButtonProps extends PressableProps {
  title?: string | ReactElement;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  style?: ViewStyle;
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

  const shouldHaveContent = leftIcon || rightIcon ? isTablet : true;

  const renderedLoader = useMemo(() => {
    return <AppActivityIndicator
      size={'small'}
      color={textStyle[theme].color}
      style={style.activityIndicator} />;
  }, [theme]);

  return (
    <Pressable
      disabled={isDisabled}
      style={({ pressed }) => [
        style.button,
        style[theme],
        style[size],
        elementStyle,
        isDisabled && disabledStyle[theme],
        pressed && pressedStyle[theme]
      ]}
      {...restProps}>
      {({ pressed }) => isLoading ? (
        renderedLoader
      ) : (
        <View style={[textStyle.container, commonStyle.flexCenter]}>
          <View style={shouldHaveContent && leftIcon && textStyle.leftIcon}>{leftIcon}</View>
          <View>
            {shouldHaveContent && (
              <AppText
                theme={size === 'default' ? TextTheme.MEDIUM : TextTheme.SMALL}
                style={[
                  textStyle.button,
                  textStyle[theme],
                  isDisabled && disabledTextStyle[theme],
                  pressed && pressedTextStyle[theme]
                ]}>
                {title}
                {children}
              </AppText>
            )}
          </View>
          <View style={shouldHaveContent && rightIcon && textStyle.rightIcon}>{rightIcon}</View>
        </View>
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
    fontFamily: variables.fontFamily.regular,
    fontWeight: '600'
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
