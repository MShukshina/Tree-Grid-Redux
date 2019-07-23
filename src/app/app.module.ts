import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { NodeTreeComponent } from './components/tree-grid/node-tree/node-tree.component';
import { RowGridComponent } from './components/tree-grid/node-tree/row-grid/row-grid.component';
import { EffectsModule } from '@ngrx/effects';
import { NodeEffects } from './store/effects/node.effects';
import {HttpClientModule} from '@angular/common/http';
import {GitHabService} from './services/githab.service';
import {treeReducers} from './store/reducers/tree.reducers';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {metaReducers, reducers} from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    TreeGridComponent,
    NodeTreeComponent,
    RowGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(treeReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([NodeEffects]),
  ],
  providers: [GitHabService],
  bootstrap: [AppComponent]
})

export class AppModule { }
