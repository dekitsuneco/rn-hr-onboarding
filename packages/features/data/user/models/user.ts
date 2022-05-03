import { Expose, Type } from 'class-transformer';
import { DateTime } from 'luxon';
import { TransformDate } from 'utils/class-transformer';
import { BaseEntity } from '../../base-entity/models';
import { UserRoleID } from '../enums';

export class User extends BaseEntity<number> {
  @Expose({ name: 'first_name' })
  public firstName: string;

  @Expose({ name: 'last_name' })
  public lastName: string;

  @Expose({ name: 'role_id' })
  public roleID: UserRoleID;

  @Expose()
  public email: string;

  @Expose({ name: 'email_verified_at' })
  @Type(() => DateTime)
  @TransformDate()
  public emailVerifiedAt: DateTime | null;

  constructor(user: Partial<User>) {
    super(user);
    Object.assign(this, user);
  }
}
