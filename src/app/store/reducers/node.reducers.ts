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
    case ENodeActions.SetPropertyIsOpened: {
      return {
        ...state,
        nodes: [].concat(Object.entries({ ...state.nodes,
          [action.node.id]: {
            ...action.node,
            isOpened: !action.node.isOpened
          }
        })).map(([id, value]) => (value))
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
        nodes: [].concat(Object.entries({...state.nodes,
          [action.node.id]: {
            ...action.node,
            child: action.child
          }
        }).map(([id, value]) => (value)))
      };
    }
    case ENodeActions.AddChildRepositories: {
      return {
        ...state,
        nodes: [].concat(Object.entries({...state.nodes,
          [action.node.parent_id]: {
            ...state.nodes[action.node.parent_id],
            child: Object.entries({
              ...state.nodes[action.node.parent_id].child,
              [action.node.id % 5]: {
                ...action.node,
                child: action.child
              }
            }).map(([id, value]) => (value))
          }
        }).map(([id, value]) => (value)))
      };
    }
    default:
      return state;
  }
};

