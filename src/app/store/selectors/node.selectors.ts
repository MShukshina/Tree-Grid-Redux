import {createSelector} from '@ngrx/store';
import {INodesState} from '../state/nodes.state';
import {ITreeState} from '../state/tree.state';
import {INodeState} from '../state/node.satate';
import {INode} from '../../models/node.interface';

const selectNodes = (state: ITreeState) => state.nodes;

export const selectNodesList = createSelector(
  selectNodes,
  (state: INodesState) => state.nodes
);
