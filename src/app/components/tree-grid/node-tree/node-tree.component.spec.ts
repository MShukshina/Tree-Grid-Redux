import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTreeComponent } from './node-tree.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('NodeTreeComponent', () => {
  let component: NodeTreeComponent;
  let fixture: ComponentFixture<NodeTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTreeComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create node-tree', () => {
    expect(component).toBeTruthy();
  });
});
