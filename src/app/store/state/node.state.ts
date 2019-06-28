import {INode} from '../../models/node.interface';

export interface INodeState {
  nodes: INode[];
  loadedNode: boolean;
  isOpened: boolean;
}

export const initialNodeState: INodeState = {
  nodes: null,
  loadedNode: false,
  isOpened: false
};
