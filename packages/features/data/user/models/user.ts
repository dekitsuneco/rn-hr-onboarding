import { Expose, Type } from 'class-transformer';
import { DateTime } from 'luxon';
import { TransformDate } from 'utils/class-transformer';
import { BaseEntity } from '../../base-entity/models';
import { UserRoleID } from '../enums';

export class User extends BaseEntity<number> {
  @Expose({ name: 'avatar_id' })
  public avatarID: number | null;

  @Expose({ name: 'first_name' })
  public firstName: string;

  @Expose({ name: 'last_name' })
  public lastName: string;

  @Expose({ name: 'role_id' })
  public roleID: UserRoleID;

  @Expose()
  public email: string;

  @Expose({ name: 'date_of_birth' })
  @Type(() => DateTime)
  @TransformDate('SQL')
  public dateOfBirth: string;

  @Expose()
  public phone: string;

  @Expose()
  public position: string;

  @Expose({ name: 'starts_on' })
  @Type(() => DateTime)
  @TransformDate('SQL')
  public startsOn: string;

  @Expose({ name: 'is_onboarding_required' })
  public isOnboardingRequired: boolean;

  @Expose({ name: 'hr_id' })
  public hrID: number | null;

  @Expose({ name: 'manager_id' })
  public managerID: number | null;

  @Expose({ name: 'lead_id' })
  public leadID: number | null;

  @Expose({ name: 'email_verified_at' })
  @Type(() => DateTime)
  @TransformDate()
  public emailVerifiedAt: DateTime | null;

  constructor(user: Partial<User>) {
    super(user);
    Object.assign(this, user);
  }
}
