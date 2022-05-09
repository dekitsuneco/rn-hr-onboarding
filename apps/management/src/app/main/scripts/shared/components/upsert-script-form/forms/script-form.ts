import { useTranslation } from 'utils/i18n';
import * as Yup from 'yup';

const translate = useTranslation('MAIN.SCRIPTS.SHARED.UPSERT_SCRIPT_FORM');

export class ScriptForm {
  public coverID: number;
  public title: string;
  public description: string;

  public static get validationSchema(): Yup.SchemaOf<Omit<ScriptForm, 'coverID'>> {
    return Yup.object().shape({
      title: Yup.string().required(translate('INPUT_TITLE_ERROR')),
      description: Yup.string().required(translate('INPUT_DESCRIPTION_ERROR'))
    });
  }

  constructor() {
    this.title = '';
    this.description = '';
  }
}
