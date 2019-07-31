import {Node} from '../../models/node.interface';

export interface UserState {
  nodes: {[id: number]: Node};
  error: Error;
}

export const initialUsersState: UserState = {
  nodes: [],
  error: null
};
