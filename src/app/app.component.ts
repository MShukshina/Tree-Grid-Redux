import {Component, OnInit} from '@angular/core';
import {_createStoreReducers} from "@ngrx/store/src/store_module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'individual-tree-grid-redux';

  constructor() {
  }

  ngOnInit() {
  }
}
