import {initialUsersState} from '../state/user.state';
import {ENodeActions, GetUsers, NodeActions} from '../actions/node.actions';
import {nodesReducers} from './node.reducers';
import {ofType} from '@ngrx/effects';

describe('node reducers', () => {
  it('Get Users Success', () => {
    const action = {
      type: ENodeActions.GetUsers,
      payload: [],
    };
    const newState = nodesReducers(initialUsersState, action);
    expect(newState).toEqual({
     ...initialUsersState,
      nodes: action.payload
    });
  });

  it('Users Get Error', () => {
    const action = {
      type: ENodeActions.UsersGetError,
    };
    const newState = nodesReducers(initialUsersState, action);
    expect(newState).toEqual({
      ...initialUsersState,
      nodes: [],
      errorMsg: null,
    });
  });

  it('Repositories Get Error', () => {
    const action = {
      type: ENodeActions.RepositoriesGetError,
    };
    const newState = nodesReducers(initialUsersState, action);
    expect(newState).toEqual({
      ...initialUsersState,
      nodes: [],
      errorMsg: null,
    });
  });

  it('Commits Get Error', () => {
    const action = {
      type: ENodeActions.CommitsGetError,
    };
    const newState = nodesReducers(initialUsersState, action);
    expect(newState).toEqual({
      ...initialUsersState,
      nodes: [],
      errorMsg: null,
    });
  });

  /*it('Add Child Users', () => {
    const action = {
      type: ENodeActions.AddChildUsers,
    };
    const newState = nodesReducers(initialUsersState, action);
    expect(newState).toEqual({
      ...initialUsersState,
      isOpened: true,
    });
  });

  it('Add Child Repositories', () => {
    const action = {
      type: ENodeActions.AddChildRepositories,
    };
    const newState = nodesReducers(initialUsersState, action);
    expect(newState).toEqual({
      ...initialUsersState,
      isOpened: true,
    });
  });*/
});
