import {Injectable} from '@angular/core';
import {Effect, ofType, Actions, createEffect} from '@ngrx/effects';
import {
  AddChild,
  ENodeActions,
  GetCommits,
  GetCommitsSuccess,
  GetRepositories,
  GetRepositoriesSuccess,
  GetUsers,
  GetUsersSuccess
} from '../actions/node.actions';
import {pluck, switchMap, withLatestFrom} from 'rxjs/operators';
import {GitHabService} from '../../services/githab.service';
import {of} from 'rxjs';
import {INode} from '../../models/node.interface';


@Injectable()
export class NodeEffects {
  @Effect() getNodes$ = createEffect(() => this.actions$.pipe(
    ofType<GetUsers>(ENodeActions.GetUsers),
    switchMap(() => this.nodeService.getGitHubUsers()),
    switchMap((nodes: INode[]) => of(new GetUsersSuccess(nodes, true))),
    )
  );

  @Effect() getRepositories$ = createEffect(() => this.actions$.pipe(
    ofType<GetRepositories>(ENodeActions.GetRepositories),
    pluck('node'),
    switchMap((node: INode) => this.nodeService.getGitHubRepositories(node.name)),
/*    switchMap( (child: INode[]) => of(new AddChild(child, node))),*/
    )
  );

  @Effect() openedCommits$ = createEffect(() => this.actions$.pipe(
    ofType<GetCommits>(ENodeActions.GetCommits),
    pluck('node'),
    switchMap((node: INode) => this.nodeService.getGitHubCommits(node.parent, node.name)),
/*    switchMap( (child: INode[]) => of(new AddChild(child, node))),*/
    )
  );

  constructor(
    private nodeService: GitHabService,
    private actions$: Actions
  ) {}
}
