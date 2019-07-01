import {initialUsersState, IUserState} from './user.state';

export interface ITreeState {
  nodes: IUserState;
}

export const initialTreeState: ITreeState = {
  nodes: initialUsersState
};

