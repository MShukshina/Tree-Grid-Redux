import {initialUsersState, NodesState} from './nodes.state';


export interface TreeState {
  nodes: NodesState;
}

export const initialTreeState: TreeState = {
  nodes: initialUsersState
};

