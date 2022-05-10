import { AppState } from '@store';
import { createSelector } from 'reselect';
import { UpsertEmployeeScreenState } from './state';

const selectFeature = (state: AppState): UpsertEmployeeScreenState => state.upsertEmployeeScreen;

export class UpsertEmployeeScreenSelectors {
  public static isCreating = createSelector(
    selectFeature,
    (state) => state.isCreating
  );

  public static isUpdating = createSelector(
    selectFeature,
    (state) => state.isUpdating
  );
}
