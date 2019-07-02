import {INode} from '../../models/node.interface';

export interface IUserState {
  nodes: {[id: number]: INode};
}

export const initialUsersState: IUserState = {
  nodes: [],
};
