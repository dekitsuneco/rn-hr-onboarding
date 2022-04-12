import { variables } from '@styles';
import { useWindowDimensions } from 'react-native';

export function useScreenDimensions(): { isTablet: boolean; width: number; height: number } {
  const { width, height } = useWindowDimensions();
  const isTablet = width > variables.breakpoints.tablet;

  return { isTablet, width, height };
}
