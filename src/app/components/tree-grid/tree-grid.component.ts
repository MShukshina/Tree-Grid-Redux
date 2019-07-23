import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectNodesList} from '../../store/selectors/node.selectors';
import {GetCommits, GetRepositories, GetUsers, SetPropertyIsOpened} from '../../store/actions/node.actions';
import {ITreeState} from '../../store/state/tree.state';
import {INode} from '../../models/node.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  nodes$: Observable<{[id: number]: INode}>;

  constructor(private store: Store<ITreeState>) {
  }

  getNodes(): Observable<{[id: number]: INode}> {
    return this.store.select(selectNodesList);
  }

  ngOnInit() {
    this.store.dispatch( new GetUsers());
    this.nodes$ = this.getNodes();
  }

  openOrCloseChildren(node: INode) {
      if (node.level === 1) {
        this.store.dispatch( new GetRepositories(node));
      } else {
        this.store.dispatch( new GetCommits(node));
      }
  }

  changePropertyIsOpened(node: INode) {
    this.store.dispatch( new SetPropertyIsOpened(node));
  }

}
