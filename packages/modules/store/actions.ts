import { action } from './utils/create-action';

export class CommonAppActions {
  public static init = action(
    '[App] Init'
  );

  public static noop = action(
    '[App] Noop'
  );
}
