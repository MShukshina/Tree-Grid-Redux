import { Action } from '@ngrx/store';
import { INode } from '../../node';

export enum ENodeActions {
  GetNodes = '[Nodes] Get Nodes',
  GetNodesSuccess = '[Nodes] Get Nodes Success'
}

export class GetNodes implements Action {
  public readonly  type = ENodeActions.GetNodes;
}
export class GetNodesSuccess implements Action {
  public readonly  type = ENodeActions.GetNodesSuccess;
  constructor(public payload: INode[]) {}
}

export type NodeActions = GetNodes | GetNodesSuccess;
