import { RadioAnswer } from './answers/radio-answer';
import { BaseEntity } from './base-entity/models';
import { Expose } from 'class-transformer';

export class Task extends BaseEntity<number> {
  @Expose()
  public title: string;

  @Expose()
  public isCompleted: boolean;

  @Expose()
  public description?: unknown;

  @Expose()
  public answerType: 'radio';

  @Expose()
  public answers: Array<RadioAnswer>;
} // TODO temporary fake task model
