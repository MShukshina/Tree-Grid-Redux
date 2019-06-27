import { ENodeActions } from '../actions/node.actions';
import { NodeActions } from '../actions/node.actions';
import { initialNodeState, INodeState } from '../state/node.state';

export const nodeReducers = (
  state = initialNodeState,
  action: NodeActions
): INodeState => {
  switch (action.type) {
    case ENodeActions.GetNodesSuccess: {
      return {
        ...state,
        nodes: action.payload
      };
    }
    default:
      return state;
  }
};

