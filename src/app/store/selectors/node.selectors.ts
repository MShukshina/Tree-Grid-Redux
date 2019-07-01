import {createSelector} from '@ngrx/store';
import {IUserState} from '../state/user.state';
import {ITreeState} from '../state/tree.state';

const selectNodes = (state: ITreeState) => state.nodes;

export const selectNodesList = createSelector(
  selectNodes,
  (state: IUserState) => state.nodes
);
