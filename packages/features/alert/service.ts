import { Alert, AlertButton, AlertOptions } from 'react-native';

class AlertService {
  public show({ title, message }: { title?: string; message: string }): void {
    Alert.alert(title, message);
  }

  public confirm({
    title,
    message,
    onConfirm,
    onCancel,
    cancelButtonText,
    confirmButtonText,
    confirmButtonStyle,
    options
  }: {
    title?: string;
    message?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    cancelButtonText: string;
    confirmButtonText: string;
    confirmButtonStyle?: AlertButton['style'];
    options?: AlertOptions;
  }): void {
    Alert.alert(
      title,
      message,
      [
        {
          text: cancelButtonText,
          onPress: onCancel,
          style: 'cancel'
        },
        {
          text: confirmButtonText,
          onPress: onConfirm,
          style: confirmButtonStyle
        }
      ],
      options
    );
  }
}

export const alertService = new AlertService();
