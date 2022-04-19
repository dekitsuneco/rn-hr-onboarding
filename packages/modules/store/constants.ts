import { Store } from 'redux';
import { Token } from 'typedi';

export const STORE_REF_TOKEN = new Token<Pick<Store<any>, 'dispatch' | 'getState'>>('STORE_REF_TOKEN');
