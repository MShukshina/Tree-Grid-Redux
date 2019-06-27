import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
/*import { reducers, metaReducers } from './reducers';*/
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { NodeTreeComponent } from './tree-grid/node-tree/node-tree.component';
import { RowGridComponent } from './tree-grid/node-tree/row-grid/row-grid.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    TreeGridComponent,
    NodeTreeComponent,
    RowGridComponent
  ],
  imports: [
    BrowserModule,
/*    StoreModule.forRoot(reducers, { metaReducers }),*/
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
