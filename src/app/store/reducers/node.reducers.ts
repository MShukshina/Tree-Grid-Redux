import { ENodeActions } from '../actions/node.actions';
import { NodeActions } from '../actions/node.actions';
import { initialNodesState, INodesState } from '../state/nodes.state';

export const nodeReducers = (
  state = initialNodesState,
  action: NodeActions
): INodesState => {
  switch (action.type) {
    case ENodeActions.GetUsersSuccess: {
      return {
        loadedNode: action.isLoaded,
        nodes: action.payload
      };
    }
    case ENodeActions.GetRepositoriesSuccess: {
      return {
        loadedNode: action.isLoaded,
        nodes: action.payload
      };
    }
    case ENodeActions.GetCommitsSuccess: {
      return {
        loadedNode: action.isLoaded,
        nodes: action.payload
      };
    }
    case ENodeActions.AddChild: {
      return {
        ...state,
          nodes: action.child
      };
    }
    default:
      return state;
  }
};

