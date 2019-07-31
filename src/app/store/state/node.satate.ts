import {Node} from '../../models/node.interface';

export interface NodeState {
  id: number;
  parent: string;
  parent_id: number;
  name: string;
  nodeId: string;
  url: string;
  level: number;
  child: {[id: number]: Node};
  isOpened: boolean;
}
