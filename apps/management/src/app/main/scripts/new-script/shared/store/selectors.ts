import { AppState } from '@store';
import { createSelector } from 'reselect';
import { NewScriptScreenState } from './state';

const selectFeature = (state: AppState): NewScriptScreenState => state.newScriptScreen;

export class NewScriptScreenSelectors {
  public static isSubmitting = createSelector(
    selectFeature,
    (state) => state.isSubmitting
  );
}
