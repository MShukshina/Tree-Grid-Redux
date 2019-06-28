import { ENodeActions } from '../actions/node.actions';
import { NodeActions } from '../actions/node.actions';
import { initialNodeState, INodeState } from '../state/node.state';

export const nodeReducers = (
  state = initialNodeState,
  action: NodeActions
): INodeState => {
  switch (action.type) {
    case ENodeActions.GetUsersSuccess: {
      return {
        ...state,
        loadedNode: action.isLoaded,
        nodes: action.payload
      };
    }
    case ENodeActions.GetRepositoriesSuccess: {
      return {
        ...state,
        loadedNode: action.isLoaded,
        nodes: action.payload
      };
    }
    case ENodeActions.GetCommitsSuccess: {
      return {
        ...state,
        loadedNode: action.isLoaded,
        nodes: action.payload
      };
    }
    case ENodeActions.OpenedChild: {
      return {
        ...state,
        isOpened: action.isOpen
      };
    }
    case ENodeActions.AddChild: {
      return {
        // изманить у определенного node детей
        ...state
      };
    }
    default:
      return state;
  }
};

