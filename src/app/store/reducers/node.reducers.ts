import { ENodeActions } from '../actions/node.actions';
import { NodeActions } from '../actions/node.actions';
import { initialNodesState, INodesState } from '../state/nodes.state';
import {initialNodeState, INodeState} from '../state/node.satate';

export const nodesReducers = (state = initialNodesState, action: NodeActions): INodesState => {
  switch (action.type) {
    case ENodeActions.GetUsersSuccess: {
      return {
        ...state,
        loadedNode: action.isLoaded,
        nodes: action.payload,
        countNodes: action.payload.length,
      };
    }
    case ENodeActions.UsersGetError: {
      return {
        ...state,
        loadedNode: false,
        nodes: []
      };
    }
    case ENodeActions.RepositoriesGetError: {
      return {
        ...state,
        loadedNode: false,
        nodes: []
      };
    }
    case ENodeActions.CommitsGetError: {
      return {
        ...state,
        loadedNode: false,
        nodes: []
      };
    }
    case ENodeActions.AddChild: {
      action.node.child = action.child;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export const nodeReducers = (state = initialNodeState, action: NodeActions): INodeState => {
  switch (action.type) {
    case ENodeActions.GetChild: {
      return {
        ...state,
        child: action.child,
      };
    }
    default:
      return state;
  }
};

