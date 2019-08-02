import {Node} from '../../models/node.interface';

export interface NodesState {
  nodes: {[id: number]: Node};
  error: Error;
  loading: boolean;
}

export const initialNodesState: NodesState = {
  nodes: [],
  error: null,
  loading: true
};