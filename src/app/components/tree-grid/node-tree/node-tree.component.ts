import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INode} from '../../../models/node.interface';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {

  @Input() nodes: INode[];
  @Output()  openOrCloseChild: EventEmitter<INode> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openOrCloseChildren(node: INode) {
    this.openOrCloseChild.emit(node);
  }

}
