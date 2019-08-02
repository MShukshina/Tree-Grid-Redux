import {createSelector} from '@ngrx/store';
import {NodesState} from '../state/nodes.state';
import {State} from '../reducers';

export const Tree = (state: State) => state.tree;

export const getNodes = createSelector(
  Tree,
  (tree: NodesState) => tree.nodes,
);

export const getLoading = createSelector(
  Tree,
  (tree: NodesState) => tree.loading
);
