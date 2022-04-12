import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStyles } from './extended-stylesheet';
import { variables } from './variables';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const isSmallScreen = screenWidth <= 360;
export const rem = isSmallScreen ? 13 : 16;

EStyleSheet.build({
  $rem: rem,
  $screenWidth: screenWidth
});

export const commonStyle = createStyles({
  container: {
    paddingHorizontal: variables.contentOffset
  },
  formControl: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: variables.color.backgroundSecondary,
    borderColor: variables.color.backgroundSecondary,
    borderWidth: 1,
    borderRadius: 10
  },
  formInput: {
    flex: 1,
    height: 44,
    paddingTop: 10,
    paddingBottom: 10,
    color: variables.color.textPrimary,
    fontSize: variables.fontSize.medium
  },
  formControlFocus: {
    backgroundColor: variables.color.background,
    borderColor: variables.color.primary
  },
  formControlError: {
    backgroundColor: variables.color.backgroundTertiary,
    borderColor: variables.color.danger
  },
  formInputDisabled: {
    backgroundColor: variables.color.gray + '33',
    opacity: 0.5
  },
  formInputIcon: {
    position: 'absolute',
    top: 0,
    right: 20,
    justifyContent: 'center',
    height: '100%',
    width: 30
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5
  },
  col: {
    flex: 1,
    marginHorizontal: 5
  }
});
