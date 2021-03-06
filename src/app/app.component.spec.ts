import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  describe('AppComponent create', () => {
    it('should create the app', () => {
      expect(app).toBeTruthy();
    });
  });

  describe('AppComponent title', () => {
    it(`should have as title 'individual-tree-grid-redux'`, () => {
      expect(app.title).toEqual('individual-tree-grid-redux');
    });
  });
});
