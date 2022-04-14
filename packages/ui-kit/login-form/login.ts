import * as Yup from 'yup';

export class LoginForm {
  public email: string;
  public password: string;

  public static get validationSchema(): Yup.AnySchema {
    return Yup.object().shape({
      email: Yup.string().email('Please enter a valid email address')
        .required('Please fill out this field'),
      password: Yup.string().required('Please fill out this field')
    });
  }

  constructor() {
    this.email = '';
    this.password = '';
  }
}
