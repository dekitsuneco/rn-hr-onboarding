export class ScriptForm {
  public cover_image: string;
  public title: string;
  public description: string;

  constructor() {
    this.cover_image = '';
    this.title = '';
    this.description = '';
  }
} // TODO temporary form, change it later

type FormInputs = Array<{ placeholder: string; name: keyof ScriptForm }>;

export const scriptDetailsInputs: FormInputs = [
  { placeholder: 'Title', name: 'title' },
  { placeholder: 'Description', name: 'description' }
];
