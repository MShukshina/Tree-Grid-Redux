import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {
  GetCommits,
  GetRepositories,
  GetUsers, SetLoading,
  SetPropertyIsOpenedRepositories,
  SetPropertyIsOpenedUsers
} from '../../store/actions/node.actions';
import {Node} from '../../models/node.interface';
import {getLoading, getNodes} from '../../store/selectors/tree.selectors';
import {State} from '../../store/reducers';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  nodes$: Observable<{[id: number]: Node}>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) {
  }

  getNodes(): Observable<{[id: number]: Node}> {
    return this.store.select(getNodes);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(getLoading);
  }

  openOrCloseChildren(node: Node) {
    if (node.level === 1) {
      this.store.dispatch(new GetRepositories(node));
    } else {
      this.store.dispatch(new SetLoading(true));
      this.store.dispatch(new GetCommits(node));
    }
  }

  changePropertyIsOpened(node: Node) {
    if (node.level === 1) {
      this.store.dispatch(new SetPropertyIsOpenedUsers(node.id));
    } else {
      this.store.dispatch(new SetPropertyIsOpenedRepositories(node.id, node.parent_id));
    }
  }

  ngOnInit() {
    this.loading$ = this.getLoading();
    this.store.dispatch(new GetUsers());
    this.nodes$ = this.getNodes();
  }
}
