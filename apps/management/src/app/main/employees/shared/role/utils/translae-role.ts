import { UserRoleID } from 'features/data';

export function TranslateRole(roleID: UserRoleID): string {
  switch (roleID) {
    case UserRoleID.ADMIN:
      return 'Admin';
    case UserRoleID.MANAGER:
      return 'HR';
    case UserRoleID.EMPLOYEE:
      return '';
  }
}
