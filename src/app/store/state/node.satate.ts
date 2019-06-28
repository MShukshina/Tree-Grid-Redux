import {INode} from '../../models/node.interface';

export interface INodeState {
  id: number;
  parent: string;
  name: string;
  nodeId: string;
  url: string;
  level: number;
  child: INode [];
  isOpened: boolean;
}

export const initialNodeState: INodeState = {
  id: null,
  parent: '',
  name: '',
  nodeId: '',
  url: '',
  level: null,
  child: [],
  isOpened: false
};
