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
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5
  },
  col: {
    flex: 1,
    marginHorizontal: 5
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderSecondaryTop: {
    borderTopWidth: 1,
    borderTopColor: variables.color.borderColorSecondary
  },
  borderSecondaryBottom: {
    borderBottomWidth: 1,
    borderBottomColor: variables.color.borderColorSecondary
  },
  borderSecondaryLeft: {
    borderLeftWidth: 1,
    borderLeftColor: variables.color.borderColorSecondary
  },
  borderSecondaryRight: {
    borderRightWidth: 1,
    borderRightColor: variables.color.borderColorSecondary
  }
});
