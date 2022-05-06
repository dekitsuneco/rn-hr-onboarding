import { SelectOption } from '@shared/select';
import { User } from 'features/data';

export function MapUserToOption(user: User): SelectOption {
  return {
    title: `${user.firstName} ${user.lastName}`,
    id: user.id
  };
}
