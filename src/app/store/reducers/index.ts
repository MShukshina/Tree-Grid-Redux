import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UserState } from '../state/user.state';
import {nodesReducers} from './node.reducers';

export interface State {
  nodes: UserState;
}

export const reducers: ActionReducerMap<State> = {
    nodes: nodesReducers,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
