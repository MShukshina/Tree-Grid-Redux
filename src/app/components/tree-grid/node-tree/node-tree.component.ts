import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INode} from '../../../models/node.interface';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {

  @Input() nodes;
  @Output() openOrCloseChild: EventEmitter<INode> = new EventEmitter();
  @Output() changePropertyIsOpened: EventEmitter<INode> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openOrCloseChildren(node: INode) {
    this.openOrCloseChild.emit(node);
  }

  changePropIsOpened(node: INode) {
    this.changePropertyIsOpened.emit(node);
  }
}
