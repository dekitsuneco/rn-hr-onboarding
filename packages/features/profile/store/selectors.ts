import { CommonAppsState } from '../../store';
import { ProfileState } from './state';
import { createSelector } from 'reselect';

const selectFeature = (state: CommonAppsState): ProfileState => state.profile;

export class ProfileSelectors {
  public static profile = createSelector(
    selectFeature,
    (state) => state.profile
  );

  public static isFetching = createSelector(
    selectFeature,
    (state) => state.isFetching
  );

  public static isUpdating = createSelector(
    selectFeature,
    (state) => state.isUpdating
  );
}
