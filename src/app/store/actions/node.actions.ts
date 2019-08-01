import {Action} from '@ngrx/store';

import { Node } from '../../models/node.interface';

export enum NodeActions {
  GetUsers = '[NODES] GET USERS',
  GetUsersSuccess = '[NODES] GET USERS SUCCESS',
  UsersGetError = '[NODES] USERS GET ERROR',
  GetRepositories = '[NODES] GET REPOSITORIES',
  RepositoriesGetError = '[NODES] REPOSITORIES GET ERROR',
  GetCommits = '[NODES] GET COMMITS',
  CommitsGetError = '[NODES] COMMITS GET ERROR',
  AddChildUsers = '[NODES] ADD CHILD USERS',
  AddChildRepositories = '[NODES] ADD CHILD REPOSITORIES',
  SetPropertyIsOpenedUsers = '[NODES] CHANGE PROPERTY IS OPENED USERS',
  SetPropertyIsOpenedRepositories = '[NODES] CHANGE PROPERTY IS OPENED REPOSITORIES',
  SetLoading = '[LOADING] SET LOADING'
}

export class GetUsers implements Action {
  public readonly type = NodeActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = NodeActions.GetUsersSuccess;
  constructor(public payload: Node[]) {}
}

export class UsersGetError implements Action {
  public readonly type = NodeActions.UsersGetError;
  constructor(public error: Error) {}
}

export class GetRepositories implements Action {
  public readonly type = NodeActions.GetRepositories;
  constructor(public node: Node) {}
}

export class RepositoriesGetError implements Action {
  public readonly type = NodeActions.RepositoriesGetError;
  constructor(public error: Error) {}
}

export class GetCommits implements Action {
  public readonly type = NodeActions.GetCommits;
  constructor(public node: Node) {}
}

export class CommitsGetError implements Action {
  public readonly type = NodeActions.CommitsGetError;
  constructor(public error: Error) {}
}

export class AddChildUsers implements Action {
  public readonly type = NodeActions.AddChildUsers;
  constructor(public child: Node[], public node: Node) {}
}

export class AddChildRepositories implements Action {
  public readonly type = NodeActions.AddChildRepositories;
  constructor(public child: Node[], public node: Node) {}
}

export class SetPropertyIsOpenedUsers implements Action {
  public readonly type = NodeActions.SetPropertyIsOpenedUsers;
  constructor(public nodeId: number) {}
}
export class SetPropertyIsOpenedRepositories implements Action {
  public readonly type = NodeActions.SetPropertyIsOpenedRepositories;
  constructor(public nodeId: number, public nodeParentId: number) {}
}

export class SetLoading implements Action {
  public readonly type = NodeActions.SetLoading;
  constructor(public loading: boolean) {}
}

export type nodeActions = GetUsers |
  GetUsersSuccess |
  GetRepositories |
  UsersGetError |
  RepositoriesGetError |
  GetCommits |
  CommitsGetError |
  AddChildUsers |
  AddChildRepositories|
  SetPropertyIsOpenedUsers|
  SetPropertyIsOpenedRepositories|
  SetLoading;
