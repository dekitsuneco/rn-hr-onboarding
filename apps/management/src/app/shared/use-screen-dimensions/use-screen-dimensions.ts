import { useWindowDimensions } from 'react-native';

export function useScreenDimensions(): { isBigScreen: boolean; width: number; height: number } {
  const { width, height } = useWindowDimensions();
  const isBigScreen = width > 768;

  return { isBigScreen, width, height };
}
