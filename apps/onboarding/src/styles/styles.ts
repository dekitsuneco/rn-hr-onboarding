import { commonStyle as appsCommonStyle, createStyles } from 'ui-kit/styles';

export const commonStyle = createStyles({
  ...appsCommonStyle,
  wrapper: {
    paddingHorizontal: '1.5rem'
  },
  '@media (min-width: 768)': {
    wrapper: {
      paddingHorizontal: '2.5rem'
    }
  },
  '@media (min-width: 1280)': {
    wrapper: {
      paddingHorizontal: '5rem'
    }
  }
});
