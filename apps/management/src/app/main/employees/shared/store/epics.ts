import { Epics } from '@store';
import { baseListedEntityEpics } from 'features/base-listed-entity-store/store';
import { userService } from 'features/data';
import { employeesScreenActions } from './actions';
import { employeesScreenSelectors } from './selectors';

export const employeesScreenEpics: Epics = {
  ...baseListedEntityEpics(employeesScreenActions, employeesScreenSelectors, userService)
};
