import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {ofType, Actions, createEffect} from '@ngrx/effects';

import {Observable, of} from 'rxjs';
import {catchError, map, pluck, switchMap} from 'rxjs/operators';

import {GitHabService} from '../../services/githab.service';
import {
  NodeActions,
  GetCommits,
  GetRepositories,
  GetUsers,
  GetUsersSuccess,
  UsersGetError,
  AddChildUsers,
  RepositoriesGetError,
  CommitsGetError,
  AddChildRepositories,
  SetPropertyIsOpenedRepositories,
  SetPropertyIsOpenedUsers
} from '../actions/node.actions';
import {Node} from '../../models/node.interface';


@Injectable()
export class NodeEffects {
  getNodes$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<GetUsers>(NodeActions.GetUsers),
    switchMap(() => this.nodeService.getGitHubUsers()),
    switchMap((nodes: Node[]) => of(new GetUsersSuccess(nodes))),
    catchError((error) => of(new UsersGetError(error)))
  ));

  openedRepositories$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<GetRepositories>(NodeActions.GetRepositories),
    pluck('node'),
    switchMap((node: Node) => {
      return this.nodeService.getGitHubRepositories(node.name,  node.id).pipe(
        map(child => ({
          child,
          node
        }))
      );
    }),
    switchMap( (result: {child: Node[], node: Node}) => [
      new AddChildUsers(result.child, result.node),
      new SetPropertyIsOpenedUsers(result.node.id),
      ]),
    catchError((error) => of(new RepositoriesGetError(error))),
    )
  );

  openedCommits$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<GetCommits>(NodeActions.GetCommits),
    pluck('node'),
    switchMap((node: Node) => {
     return this.nodeService.getGitHubCommits(node.parent, node.name, node.id).pipe(
          map(child => ({
            child,
            node
          }))
        );
      }),
    switchMap((result: {child: Node[], node: Node}) => [
      new AddChildRepositories(result.child, result.node),
      new SetPropertyIsOpenedRepositories(result.node.id, result.node.parent_id),
    ]),
    catchError((error) => of(new CommitsGetError(error))))
  );
  constructor(private nodeService: GitHabService, private actions$: Actions) {}
}
