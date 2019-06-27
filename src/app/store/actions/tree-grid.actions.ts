import {createAction, props} from '@ngrx/store';

export const getUsers = createAction('[TreeGrid Component] GetUsers');

export const getRepositories = createAction(
  '[TreeGrid Component] GetRepositories',
        props<{userName: string}>());

export const getCommits = createAction(
  '[TreeGrid Component] GetCommits',
        props<{userName: string, repositoryName: string}>());

export const openChild = createAction('[TreeGrid Component] OpenChild');
