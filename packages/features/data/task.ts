import { RadioAnswer } from './answers/radio-answer';

export class Task {
  public id: string;
  public title: string;
  public isCompleted: boolean;
  public description?: unknown;
  public answerType: 'radio';
  public answers: Array<RadioAnswer>;
} // TODO temporary fake task model
