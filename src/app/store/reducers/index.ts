import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {nodesReducers} from './node.reducers';
import {NodesState} from '../state/nodes.state';

export interface State {
  nodes: NodesState;
}

export const reducers: ActionReducerMap<State> = {
    nodes: nodesReducers,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
