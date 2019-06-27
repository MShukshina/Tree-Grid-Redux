import { INodeState, initialNodeState } from './node.state';

export interface ITreeState {
  nodes: INodeState;
}

export const initialTreeState: ITreeState = {
  nodes: initialNodeState
};

export function getInitialState(): ITreeState {
  return initialTreeState;
}
