import {INode} from '../../models/node.interface';

export interface INodeState {
  id: number;
  parent: string;
  parent_id: number;
  name: string;
  nodeId: string;
  url: string;
  level: number;
  child: {[id: number]: INode};
}

export const initialNodeState: INodeState = {
  id: null,
  parent: '',
  parent_id: null,
  name: '',
  nodeId: '',
  url: '',
  level: null,
  child: [],
};
