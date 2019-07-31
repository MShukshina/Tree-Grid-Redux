import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Node} from '../../../../models/node.interface';

@Component({
  selector: 'app-row-grid',
  templateUrl: './row-grid.component.html',
  styleUrls: ['./row-grid.component.css']
})
export class RowGridComponent implements OnInit {

  @Input() node;
  @Output() openOrCloseChild: EventEmitter<Node> = new EventEmitter();
  @Output() changePropIsOpened: EventEmitter<Node> = new EventEmitter();

  constructor() { }

  openChildren(node: Node) {
    this.openOrCloseChild.emit(node);
  }

  changePropertyIsOpened(node: Node) {
    this.changePropIsOpened.emit(node);
  }

  openOrCloseChildren(node: Node) {
    if (!node.isOpened) {
      this.openChildren(node);
    } else {
      this.changePropertyIsOpened(node);
    }
  }

  ngOnInit() {
  }

}
