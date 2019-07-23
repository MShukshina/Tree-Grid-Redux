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
  @Output() changePropIsOpened: EventEmitter<INode> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openChildren(node: INode) {
    this.openOrCloseChild.emit(node);
  }

  changePropertyIsOpened(node: INode) {
    this.changePropIsOpened.emit(node);
  }

  openOrCloseChildren(node: INode) {
    if (!node.isOpened) {
      this.openChildren(node);
    } else {
      this.changePropertyIsOpened(node);
    }
    /*node.isOpened = !node.isOpened;*/
  }

}
