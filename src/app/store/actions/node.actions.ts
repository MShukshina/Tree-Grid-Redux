import {Action, createAction, props} from '@ngrx/store';
import { INode } from '../../models/node.interface';

/*export const GetNodes = createAction('Node] Get Node');
export const GetNodesSuccess = createAction('[Node] Get Node Success', props<{nodes: INode[], loadedNode: boolean}>());*/

export enum ENodeActions {
  GetUsers = '[Nodes] Get Users',
  GetUsersSuccess = '[Nodes] Get Users Success',
  GetRepositories = '[Nodes] Get Repositories',
  GetRepositoriesSuccess = '[Nodes] Get Repositories Success',
  GetCommits = '[Nodes] Get Commits',
  GetCommitsSuccess = '[Nodes] Get Commits Success',
  AddChild = '[Nodes] Add Child',

}

export class GetUsers implements Action {
  public readonly type = ENodeActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = ENodeActions.GetUsersSuccess;
  constructor(public payload: INode[], public isLoaded: boolean) {}
}

export class GetRepositories implements Action {
  public readonly type = ENodeActions.GetRepositories;
  constructor(public node: INode) {}
}

export class GetRepositoriesSuccess implements Action {
  public readonly type = ENodeActions.GetRepositoriesSuccess;
  constructor(public payload: INode[], public isLoaded: boolean) {}
}

export class GetCommits implements Action {
  public readonly type = ENodeActions.GetCommits;
  constructor(public node: INode) {}
}

export class GetCommitsSuccess implements Action {
  public readonly type = ENodeActions.GetCommitsSuccess;
  constructor(public payload: INode[], public isLoaded: boolean) {}
}

export class AddChild implements Action {
  public readonly type = ENodeActions.AddChild;
  constructor(public child: INode[], public node: INode) {}
}

export type NodeActions = GetUsers |
  GetUsersSuccess |
  GetRepositories |
  GetRepositoriesSuccess |
  GetCommits |
  GetCommitsSuccess |
  AddChild;
