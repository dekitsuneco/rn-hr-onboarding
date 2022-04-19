import { action } from './utils/create-action';

export class AppActions {
  public static init = action(
    '[App] Init'
  );

  public static noop = action(
    '[App] Noop'
  );
}
