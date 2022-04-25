import { variables } from './variables';
import { commonStyle as appsCommonStyle, createStyles } from 'ui-kit/styles';

export const commonStyle = createStyles({
  ...appsCommonStyle,
  wrapper: {
    paddingHorizontal: '1rem'
  },
  [`@media (min-width: ${variables.breakpoints.tablet})`]: {
    wrapper: {
      paddingHorizontal: '2.5rem'
    }
  },
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    wrapper: {
      paddingHorizontal: '5rem'
    }
  }
});
