import { AppComponent } from './app.component';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { NodeTreeComponent } from './components/tree-grid/node-tree/node-tree.component';
import { RowGridComponent } from './components/tree-grid/node-tree/row-grid/row-grid.component';
import { GitHabService } from './services/githab.service';

import { NodeEffects } from './store/effects/node.effects';
import { treeReducers } from './store/reducers/tree.reducers';

import { environment } from '../environments/environment';
import { SvgLoaderComponent } from './components/svg-loader/svg-loader.component';

import { AngularSvgIconModule } from 'angular-svg-icon';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    TreeGridComponent,
    NodeTreeComponent,
    RowGridComponent,
    SvgLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(treeReducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([NodeEffects]),
    AngularSvgIconModule,
  ],
  providers: [GitHabService],
  bootstrap: [AppComponent]
})

export class AppModule { }
