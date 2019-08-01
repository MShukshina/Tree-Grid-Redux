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
import {loading, selectNodesList} from '../../store/selectors/node.selectors';
import {TreeState} from '../../store/state/tree.state';



@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  nodes$: Observable<{[id: number]: Node}>;
  loading$: Observable<boolean>;

  constructor(private store: Store<TreeState>) {
  }

  getNodes(): Observable<{[id: number]: Node}> {
    return this.store.select(selectNodesList);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(loading);
  }

  openOrCloseChildren(node: Node) {
      if (node.level === 1) {
        this.store.dispatch( new SetLoading(true));
        setTimeout(() => {
          this.store.dispatch( new GetRepositories(node));
        }, 3000);
      } else {
        this.store.dispatch( new SetLoading(true));
        this.store.dispatch( new GetCommits(node));
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
    this.store.dispatch( new SetLoading(true));
    this.store.dispatch(new GetUsers());
    this.nodes$ = this.getNodes();
    this.loading$ = this.getLoading();
  }
}
