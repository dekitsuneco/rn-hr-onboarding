import { BaseListedEntityState } from 'features/base-listed-entity-store/store';
import { User } from 'features/data';
import { PaginationRequest } from 'features/data/pagination';

export class EmployeesScreenState extends BaseListedEntityState<User, PaginationRequest> {
  constructor() {
    super({
      orderBy: 'created_at',
      desc: true,
      perPage: 4
    });
  }
}
