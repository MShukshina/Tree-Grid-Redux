import {createSelector} from '@ngrx/store';

import {TreeState} from '../state/tree.state';
import {NodesState} from '../state/nodes.state';

const selectNodes = (state: TreeState) => state.nodes;

export const selectNodesList = createSelector(
  selectNodes,
  (state: NodesState) => state.nodes
);

export const loading = createSelector(
  selectNodes,
  (state: NodesState) => state.loading
);

