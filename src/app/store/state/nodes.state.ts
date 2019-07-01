import {INode} from '../../models/node.interface';
import {initialNodeState, INodeState} from './node.satate';

export interface INodesState {
  nodes: {[id: number]: INode};
  nodesState: INodeState;
  loadedNode: boolean;
  countNodes: number;
}

export const initialNodesState: INodesState = {
  nodes: null,
  nodesState: initialNodeState,
  loadedNode: false,
  countNodes: 0
};
