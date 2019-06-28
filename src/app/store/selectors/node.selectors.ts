import {createSelector} from '@ngrx/store';
import {INodeState} from '../state/node.state';
import {ITreeState} from '../state/tree.state';

const selectNodes = (state: ITreeState) => state.nodes;

export const selectNodesList = createSelector(
  selectNodes,
  (state: INodeState) => state.nodes
);

