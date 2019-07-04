import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridComponent } from './tree-grid.component';
import {Store} from '@ngrx/store';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ITreeState} from '../../store/state/tree.state';
import {GetUsers} from '../../store/actions/node.actions';
import {GitHabService} from '../../services/githab.service';

describe('TreeGridComponent', () => {
  let component: TreeGridComponent;
  let fixture: ComponentFixture<TreeGridComponent>;
  let store: jasmine.SpyObj<Store<ITreeState>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeGridComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: Store,
        useValue: {
          dispatch: jasmine.createSpy(),
          select: jasmine.createSpy(),
          subscribe: jasmine.createSpy()
        }}]
    });

    fixture = TestBed.createComponent(TreeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
  });

  describe('TreeGridComponent create', () => {
    it('should create tree-grid', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('TreeGridComponent ngOnInit', () => {
    it('should dispatch an the GetUsers action in ngOnInit lifecycle', () => {
      const action = new GetUsers();
      expect(store.dispatch).toBeObservable(action);
    });
  });
});
