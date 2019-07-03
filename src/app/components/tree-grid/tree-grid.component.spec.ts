import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridComponent } from './tree-grid.component';
import {ITreeState} from '../../store/state/tree.state';
import {combineReducers, Store, StoreModule} from '@ngrx/store';
import {GetUsers, GetUsersSuccess} from '../../store/actions/node.actions';
import {reducers} from '../../store/reducers';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {INode} from '../../models/node.interface';

describe('TreeGridComponent', () => {
  let component: TreeGridComponent;
  let fixture: ComponentFixture<TreeGridComponent>;
  let store: Store<ITreeState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...reducers,
          feature: combineReducers(reducers),
        }),
      ],
      declarations: [ TreeGridComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(TreeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('TreeGridComponent create', () => {
    it('should create tree-grid', () => {
      expect(component).toBeTruthy();
    });
  });

  /*it('should dispatch an action to load data when created', () => {
    const action = new GetUsers();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });*/

  /*it('should display a list of items after the data is loaded', () => {
    const nodes$: INode[]  = [];

    store.dispatch(new GetUsersSuccess(nodes$));

    component.nodes$.subscribe(data => {
      expect(Object.keys(data).length).toBe(nodes$.length);
    });
  });*/
});
