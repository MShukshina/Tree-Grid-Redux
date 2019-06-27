import { ActionReducerMap } from '@ngrx/store';

import { ITreeState } from '../state/tree.state';
import {nodeReducers} from './node.reducers';


export const treeReducers: ActionReducerMap <ITreeState, any> = {
  nodes: nodeReducers
};
