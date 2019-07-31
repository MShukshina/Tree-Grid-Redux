import {createSelector} from '@ngrx/store';

import {TreeState} from '../state/tree.state';
import {UserState} from '../state/user.state';

const selectNodes = (state: TreeState) => state.nodes;

export const selectNodesList = createSelector(
  selectNodes,
  (state: UserState) => state.nodes
);

