import { ITreeState, initialTreeState } from './tree.state';

export interface IAppState {
 tree: ITreeState;
}

export const initialAppState: IAppState = {
  tree: initialTreeState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
