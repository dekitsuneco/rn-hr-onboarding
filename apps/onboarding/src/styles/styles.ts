import { commonStyle as appsCommonStyle, createStyles } from 'ui-kit/styles';

export const commonStyle = createStyles({
  ...appsCommonStyle,
  container: {
    paddingHorizontal: '1.5rem'
  },
  '@media (min-width: 768)': {
    container: {
      paddingHorizontal: '2.5rem'
    }
  },
  '@media (min-width: 1280)': {
    container: {
      paddingHorizontal: '5rem'
    }
  }
});
