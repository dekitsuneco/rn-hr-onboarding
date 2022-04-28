export class AuthState {
  public token?: string;
  public isTokenLoaded: boolean;
  public isAuthorizing: boolean;
  public errorMessage?: string;

  constructor() {
    this.isTokenLoaded = false;
    this.isAuthorizing = false;
  }
}
