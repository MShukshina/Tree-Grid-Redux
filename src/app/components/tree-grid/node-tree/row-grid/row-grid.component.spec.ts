import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowGridComponent } from './row-grid.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('RowGridComponent', () => {
  let component: RowGridComponent;
  let fixture: ComponentFixture<RowGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowGridComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create row-grid', () => {
    expect(component).toBeTruthy();
  });
});
