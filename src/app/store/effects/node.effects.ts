import {Injectable} from '@angular/core';
import {Effect, ofType, Actions, createEffect} from '@ngrx/effects';
import { ENodeActions, GetCommits, GetRepositories,
  GetUsers,  GetUsersSuccess, UsersGetError,
  AddChild, RepositoriesGetError, CommitsGetError
} from '../actions/node.actions';
import {catchError, map, pluck, switchMap} from 'rxjs/operators';
import {GitHabService} from '../../services/githab.service';
import {of} from 'rxjs';
import {INode} from '../../models/node.interface';
import {INodeState} from '../state/node.satate';


@Injectable()
export class NodeEffects {
  @Effect() getNodes$ = createEffect(() => this.actions$.pipe(
    ofType<GetUsers>(ENodeActions.GetUsers),
    switchMap(() => this.nodeService.getGitHubUsers()),
    switchMap((nodes: INode[]) => of(new GetUsersSuccess(nodes, true))),
    catchError(() => of(new UsersGetError()))
    )
  );

  @Effect() getRepositories$ = createEffect(() => this.actions$.pipe(
    ofType<GetRepositories>(ENodeActions.GetRepositories),
    pluck('node'),
    switchMap((node: INode) => {
      return this.nodeService.getGitHubRepositories(node.name).pipe(
        map(child => ({
          child,
          node
        }))
      );
    }),
    switchMap( (result: {child: INode[], node: INodeState}) => of(new AddChild(result.child, result.node))),
    catchError(() => of(new RepositoriesGetError())),
    )
  );

  @Effect() openedCommits$ = createEffect(() => this.actions$.pipe(
    ofType<GetCommits>(ENodeActions.GetCommits),
    pluck('node'),
    switchMap((node: INode) => {
     return this.nodeService.getGitHubCommits(node.parent, node.name).pipe(
          map(child => ({
            child,
            node
          }))
        );
      }),
    switchMap((result: {child: INode[], node: INodeState}) => of(new AddChild(result.child, result.node))),
    catchError(() => of(new CommitsGetError()))
    )
  );

  constructor(
    private nodeService: GitHabService,
    private actions$: Actions
  ) {}
}
