import {ActionReducerMap} from '@ngrx/store';

import {TreeState} from '../state/tree.state';
import {nodesReducers} from './node.reducers';


export const treeReducers: ActionReducerMap <TreeState, any> = {
  nodes: nodesReducers
};
