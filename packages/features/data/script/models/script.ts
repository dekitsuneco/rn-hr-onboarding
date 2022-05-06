import { Expose } from 'class-transformer';
import { BaseEntity } from '../../base-entity/models';

export class Script extends BaseEntity<number> {
  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose({ name: 'cover_id' })
  public coverID: number;

  constructor(script: Partial<Script>) {
    super(script);
    Object.assign(this, script);
  }
}
