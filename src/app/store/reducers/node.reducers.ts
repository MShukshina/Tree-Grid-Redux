import {NodeActions, nodeActions} from '../actions/node.actions';
import {initialUsersState, UserState} from '../state/user.state';

export const nodesReducers = (state = initialUsersState, action: nodeActions): UserState => {
  switch (action.type) {
    case NodeActions.GetUsersSuccess: {
      return {
        ...state,
        nodes: action.payload
      };
    }
    case NodeActions.SetPropertyIsOpenedUsers: {
      const node = {...state.nodes[action.nodeId]};
      node.isOpened = !node.isOpened;
      return {
        ...state,
        nodes: [].concat(Object.entries(
          {
            ...state.nodes,
            [action.nodeId]: {
              ...node
            }
          }
        )).map(([id, value]) => (value))
      };
    }
    case NodeActions.SetPropertyIsOpenedRepositories: {
      const parentNode = {...state.nodes[action.nodeParentId]};
      parentNode.child[action.nodeId % 5].isOpened = !parentNode.child[action.nodeId % 5].isOpened;
      return {
        ...state,
        nodes: [].concat(Object.entries(
          {
            ...state.nodes,
            [action.nodeParentId]: {
              ...parentNode,
              child: Object.entries({
                ...parentNode.child
              }).map(([id, value]) => (value))
            }
          })).map(([id, value]) => (value))
      };
    }
    case NodeActions.UsersGetError: {
      return {
        ...state,
        nodes: [],
        error: action.error
      };
    }
    case NodeActions.RepositoriesGetError: {
      return {
        ...state,
        nodes: [],
        error: action.error
      };
    }
    case NodeActions.CommitsGetError: {
      return {
        ...state,
        nodes: [],
        error: action.error
      };
    }
    case NodeActions.AddChildUsers: {
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
    case NodeActions.AddChildRepositories: {
      return {
        ...state,
        nodes: [].concat(Object.entries({
          ...state.nodes,
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

