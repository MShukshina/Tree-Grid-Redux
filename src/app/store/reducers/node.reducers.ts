import { ENodeActions } from '../actions/node.actions';
import { NodeActions } from '../actions/node.actions';
import {initialUsersState, IUserState} from '../state/user.state';

export const nodesReducers = (state = initialUsersState, action: NodeActions): IUserState => {
  switch (action.type) {
    case ENodeActions.GetUsersSuccess: {
      return {
        ...state,
        nodes: action.payload
      };
    }
    case ENodeActions.UsersGetError: {
      return {
        ...state,
        nodes: []
      };
    }
    case ENodeActions.RepositoriesGetError: {
      return {
        ...state,
        nodes: []
      };
    }
    case ENodeActions.CommitsGetError: {
      return {
        ...state,
        nodes: []
      };
    }
    case ENodeActions.AddChildUsers: {
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [action.node.id]: {
            ...action.node,
            child: action.child
          }
        }
      };
    }
    case ENodeActions.AddChildRepositories: {
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [action.node.id]: {
            ...action.node,
            child: []
          }
        }
      };
    }
    default:
      return state;
  }
};

