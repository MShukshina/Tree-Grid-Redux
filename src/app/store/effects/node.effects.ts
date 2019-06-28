import {Injectable} from '@angular/core';
import {Effect, ofType, Actions, createEffect} from '@ngrx/effects';
import {AddChild, ENodeActions, GetUsers, GetUsersSuccess, OpenedChild} from '../actions/node.actions';
import {switchMap} from 'rxjs/operators';
import {GitHabService} from '../../services/githab.service';
import {of} from 'rxjs';
import {ITree} from '../../models/tree.interface';
import {INode} from '../../models/node.interface';


@Injectable()
export class NodeEffects {
  @Effect() getNodes$ = createEffect(() => this.actions$.pipe(
    ofType<GetUsers>(ENodeActions.GetUsers),
    switchMap(() => this.nodeService.getGitHubUsers()),
    switchMap((nodes: INode[]) => of(new GetUsersSuccess(nodes, true))),
    )
  );

  @Effect() openedChild$ = createEffect(() => this.actions$.pipe(
    ofType<OpenedChild>(ENodeActions.OpenedChild),
    switchMap(() => this.nodeService.getGitHubRepositories()),
    switchMap( (child: INode[]) => of(new AddChild(child))),
    // запросить у Store текущих Users,
    /*switchMap((nodes: INode[]) => of(new GetNodesSuccess(nodes, true))),*/
    )
  );

  constructor(
    private nodeService: GitHabService,
    private actions$: Actions
  ) {}
}
