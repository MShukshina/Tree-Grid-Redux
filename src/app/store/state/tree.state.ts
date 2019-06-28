import { INodesState, initialNodesState } from './nodes.state';

export interface ITreeState {
  nodes: INodesState;
}

export const initialTreeState: ITreeState = {
  nodes: initialNodesState
};

export function getInitialState(): ITreeState {
  return initialTreeState;
}
