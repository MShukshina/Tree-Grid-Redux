import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {selectNodesList} from '../../store/selectors/node.selectors';
import {GetCommits, GetRepositories, GetUsers} from '../../store/actions/node.actions';
import {ITreeState} from '../../store/state/tree.state';
import {INode} from '../../models/node.interface';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  nodes$ = this.store.pipe(select(selectNodesList));

  constructor(private store: Store<ITreeState>) {
  }

  ngOnInit() {
    this.store.dispatch( new GetUsers());
  }

  openOrCloseChildren(node: INode) {
      if (node.level === 1) {
        this.store.dispatch( new GetRepositories());
      } else {
        this.store.dispatch( new GetCommits());
      }
  }

}
