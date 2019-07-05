import {Injectable} from '@angular/core';
import {ofType, Actions, createEffect} from '@ngrx/effects';
import {
  ENodeActions, GetCommits, GetRepositories,
  GetUsers, GetUsersSuccess, UsersGetError,
  AddChildUsers, RepositoriesGetError, CommitsGetError, AddChildRepositories
} from '../actions/node.actions';
import {catchError, map, pluck, switchMap} from 'rxjs/operators';
import {GitHabService} from '../../services/githab.service';
import {Observable, of} from 'rxjs';
import {INode} from '../../models/node.interface';
import {Action} from '@ngrx/store';


@Injectable()
export class NodeEffects {
  getNodes$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<GetUsers>(ENodeActions.GetUsers),
    switchMap(() => this.nodeService.getGitHubUsers()),
    switchMap((nodes: INode[]) => of(new GetUsersSuccess(nodes))),
    catchError((error) => of(new UsersGetError(error)))
  ));

  openedRepositories$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<GetRepositories>(ENodeActions.GetRepositories),
    pluck('node'),
    switchMap((node: INode) => {
      return this.nodeService.getGitHubRepositories(node.name,  node.id).pipe(
        map(child => ({
          child,
          node
        }))
      );
    }),
    switchMap( (result: {child: INode[], node: INode}) => of(new AddChildUsers(result.child, result.node))),
    catchError((error) => of(new RepositoriesGetError({error}))),
    )
  );

  openedCommits$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<GetCommits>(ENodeActions.GetCommits),
    pluck('node'),
    switchMap((node: INode) => {
     return this.nodeService.getGitHubCommits(node.parent, node.name, node.id).pipe(
          map(child => ({
            child,
            node
          }))
        );
      }),
    switchMap((result: {child: INode[], node: INode}) => of(new AddChildRepositories(result.child, result.node))),
    catchError((error) => of(new CommitsGetError({error})))
    )
  );

  constructor(private nodeService: GitHabService, private actions$: Actions) {}
}
