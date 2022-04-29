import { BaseListedEntityFacade } from 'features/base-listed-entity-store';
import { User } from 'features/data';
import { PaginationData } from 'features/data/pagination';
import { employeesScreenActions } from './shared/store/actions';
import { employeesScreenSelectors } from './shared/store/selectors';
import { EmployeesScreenState } from './shared/store/state';

class EmployeesScreenFacade extends BaseListedEntityFacade<
  EmployeesScreenState,
  User,
  typeof employeesScreenActions,
  typeof employeesScreenSelectors
> {
  constructor() {
    super(employeesScreenActions, employeesScreenSelectors);
  }

  public itemsToShow(pagination: PaginationData, showMoreNumber: number, perPage: number): number {
    return (
      (pagination.currentPage === pagination.lastPage
        ? pagination.total - Math.floor(pagination.total / perPage) * perPage
        : perPage) + showMoreNumber
    );
  }
}

export const employeesScreenFacade = new EmployeesScreenFacade();
