import {INode} from '../../models/node.interface';
import {initialNodeState, INodeState} from './node.satate';

export interface IRepositoriesState {
  nodes: {[id: number]: INode};
  nodesState: INodeState;
  loadedNode: boolean;
  countNodes: number;
}

export const initialRepositoriesState: IRepositoriesState = {
  nodes: null,
  nodesState: initialNodeState,
  loadedNode: false,
  countNodes: 0
};
