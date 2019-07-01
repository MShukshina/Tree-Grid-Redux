import {Action, createAction, props} from '@ngrx/store';
import { INode } from '../../models/node.interface';

/*export const GetNodes = createAction('Node] Get Node');
export const GetNodesSuccess = createAction('[Node] Get Node Success', props<{nodes: INode[], loadedNode: boolean}>());*/

export enum ENodeActions {
  GetUsers = '[Nodes] Get Users',
  GetUsersSuccess = '[Nodes] Get Users Success',
  UsersGetError = '[Nodes] Users Get Error',
  GetRepositories = '[Nodes] Get Repositories',
  RepositoriesGetError = '[Nodes] Repositories Get Error',
  GetCommits = '[Nodes] Get Commits',
  CommitsGetError = '[Nodes] Commits Get Error',
  GetChild = '[Nodes] Get Child',
  AddChild = '[Nodes] Add Child',
}

export class GetUsers implements Action {
  public readonly type = ENodeActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = ENodeActions.GetUsersSuccess;
  constructor(public payload: INode[], public isLoaded: boolean) {}
}

export class UsersGetError implements Action {
  public readonly type = ENodeActions.UsersGetError;
}

export class GetRepositories implements Action {
  public readonly type = ENodeActions.GetRepositories;
  constructor(public node: INode) {}
}

export class RepositoriesGetError implements Action {
  public readonly type = ENodeActions.RepositoriesGetError;
}

export class GetCommits implements Action {
  public readonly type = ENodeActions.GetCommits;
  constructor(public node: INode) {}
}

export class CommitsGetError implements Action {
  public readonly type = ENodeActions.CommitsGetError;
}

export class GetChild implements Action {
  public readonly type = ENodeActions.GetChild;
  constructor(public child: INode[]) {}
}

export class AddChild implements Action {
  public readonly type = ENodeActions.AddChild;
  constructor(public child: INode[], public node: INode) {}
}

export type NodeActions = GetUsers |
  GetUsersSuccess |
  GetRepositories |
  UsersGetError |
  RepositoriesGetError |
  GetCommits |
  CommitsGetError |
  GetChild |
  AddChild;
