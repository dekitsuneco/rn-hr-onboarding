import * as Yup from 'yup';

export class ScriptForm {
  public coverID: number;
  public title: string;
  public description: string;

  public static get validationSchema(): Yup.SchemaOf<Omit<ScriptForm, 'coverID'>> {
    return Yup.object().shape({
      title: Yup.string().required('Please enter a title'),
      description: Yup.string().required('Please enter some description')
    });
  }

  constructor() {
    this.title = '';
    this.description = '';
  }
}
