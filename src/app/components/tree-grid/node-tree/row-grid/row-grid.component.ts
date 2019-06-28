import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INode} from '../../../../models/node.interface';

@Component({
  selector: 'app-row-grid',
  templateUrl: './row-grid.component.html',
  styleUrls: ['./row-grid.component.css']
})
export class RowGridComponent implements OnInit {

  @Input() node: INode
  @Output()  openOrCloseChild: EventEmitter<INode> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openOrCloseChildren(node: INode) {
    this.openOrCloseChild.emit(node);
  }

}
