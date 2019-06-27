import {INode} from '../../node';

export interface INodeState {
  nodes: INode[];
  loadedNode: boolean;
  selectedNode: INode;
}

export const initialNodeState: INodeState = {
  nodes: [],
  loadedNode: false,
  selectedNode: null
};
