import { ApiService } from 'modules/api';
import { commonAppsConfig } from '../constants';

export const apiService = new ApiService(commonAppsConfig.api.root);
