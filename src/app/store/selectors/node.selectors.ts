import {createSelector} from '@ngrx/store';
import {INodesState} from '../state/nodes.state';
import {ITreeState} from '../state/tree.state';

const selectNodes = (state: ITreeState) => state.nodes;

export const selectNodesList = createSelector(
  selectNodes,
  (state: INodesState) => state.nodes
);

