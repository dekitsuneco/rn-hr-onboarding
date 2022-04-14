import * as Yup from 'yup';
import { useTranslation } from 'utils/i18n';

export enum LoginProperties {
  email = 'email',
  password = 'password'
}

export class LoginForm {
  public email: string;
  public password: string;

  public static get validationSchema(): Yup.AnySchema {
    const translate = useTranslation('PUBLIC.VALIDATION');

    return Yup.object().shape({
      email: Yup.string()
        .email(translate('TEXT_VALIDATION_EMAIL'))
        .required(translate('TEXT_VALIDATION_REQUIRED_FIELD')),
      password: Yup.string().required(translate('TEXT_VALIDATION_REQUIRED_FIELD'))
    });
  }

  constructor() {
    this.email = '';
    this.password = '';
  }
}

//* Create login validation class
//* Add enum for login properties
//* Add i18n translations
