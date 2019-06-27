import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Data} from './Data';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  public users$: Observable<Data[]>;
 /* public repositories$: Observable<Data[]>;
  public commits$: Observable<Data[]>;*/

  constructor(private store: Store<{ users: Data[] }>) {
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Tree Grid] Load Users' });
  }

}
