import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INode} from '../../../../models/node.interface';

@Component({
  selector: 'app-row-grid',
  templateUrl: './row-grid.component.html',
  styleUrls: ['./row-grid.component.css']
})
export class RowGridComponent implements OnInit {

  @Input() node;
  @Output() openOrCloseChild: EventEmitter<INode> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openChildren(node) {
    this.openOrCloseChild.emit(node);
  }

  openOrCloseChildren(node) {
    if (!node.isOpened) {
      this.openChildren(node);
    }
    node.isOpened = !node.isOpened;
  }

}
