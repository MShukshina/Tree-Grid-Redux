import {Action, createAction, props} from '@ngrx/store';
import { INode } from '../../models/node.interface';

export enum ENodeActions {
  GetUsers = '[Nodes] Get Users',
  GetUsersSuccess = '[Nodes] Get Users Success',
  UsersGetError = '[Nodes] Users Get Error',
  GetRepositories = '[Nodes] Get Repositories',
  RepositoriesGetError = '[Nodes] Repositories Get Error',
  GetCommits = '[Nodes] Get Commits',
  CommitsGetError = '[Nodes] Commits Get Error',
  AddChildUsers = '[Nodes] Add Child Users',
  AddChildRepositories = '[Nodes] Add Child Repositories',
  SetPropertyIsOpened = '[Nodes] Change Property isOpened',
}

export class GetUsers implements Action {
  public readonly type = ENodeActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = ENodeActions.GetUsersSuccess;
  constructor(public payload: INode[]) {}
}

export class UsersGetError implements Action {
  public readonly type = ENodeActions.UsersGetError;
  constructor(public payload: { error: Error }) {}
}

export class GetRepositories implements Action {
  public readonly type = ENodeActions.GetRepositories;
  constructor(public node: INode) {}
}

export class RepositoriesGetError implements Action {
  public readonly type = ENodeActions.RepositoriesGetError;
  constructor(public payload: { error: Error }) {}
}

export class GetCommits implements Action {
  public readonly type = ENodeActions.GetCommits;
  constructor(public node: INode) {}
}

export class CommitsGetError implements Action {
  public readonly type = ENodeActions.CommitsGetError;
  constructor(public payload: { error: Error }) {}
}

export class AddChildUsers implements Action {
  public readonly type = ENodeActions.AddChildUsers;
  constructor(public child: INode[], public node: INode) {}
}

export class AddChildRepositories implements Action {
  public readonly type = ENodeActions.AddChildRepositories;
  constructor(public child: INode[], public node: INode) {}
}

export class SetPropertyIsOpened implements Action {
  public readonly type = ENodeActions.SetPropertyIsOpened;
  constructor(public node: INode) {}
}

export type NodeActions = GetUsers |
  GetUsersSuccess |
  GetRepositories |
  UsersGetError |
  RepositoriesGetError |
  GetCommits |
  CommitsGetError |
  AddChildUsers |
  AddChildRepositories|
  SetPropertyIsOpened;
