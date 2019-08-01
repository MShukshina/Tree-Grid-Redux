import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Node} from '../../../models/node.interface';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {

  @Input() nodes;
  @Input() loading;
  @Output() openOrCloseChild: EventEmitter<Node> = new EventEmitter();
  @Output() changePropertyIsOpened: EventEmitter<Node> = new EventEmitter();

  constructor() { }

  openOrCloseChildren(node: Node) {
    this.openOrCloseChild.emit(node);
  }

  changePropIsOpened(node: Node) {
    this.changePropertyIsOpened.emit(node);
  }

  ngOnInit() {
  }


}
