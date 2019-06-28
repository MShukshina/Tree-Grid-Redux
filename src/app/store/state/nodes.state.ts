import {INode} from '../../models/node.interface';

export interface INodesState {
  nodes: INode[];
  loadedNode: boolean;
}

export const initialNodesState: INodesState = {
  nodes: null,
  loadedNode: false
};
