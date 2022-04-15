import { variables } from 'ui-kit/styles';
import { useWindowDimensions } from 'react-native';

export function useScreenDimensions(): { isTablet: boolean; isDesktop: boolean; width: number; height: number } {
  const { width, height } = useWindowDimensions();
  const isTablet = width > variables.breakpoints.tablet;
  const isDesktop = width > variables.breakpoints.desktop;

  return { isTablet, isDesktop, width, height };
}
