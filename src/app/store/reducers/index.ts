import {ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {nodesReducers} from './node.reducers';
import {NodesState} from '../state/nodes.state';

export interface State {
  tree: NodesState;
}

export const reducers: ActionReducerMap<State> = {
  tree: nodesReducers,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
