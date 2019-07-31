import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserModule, TransferState} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { NodeTreeComponent } from './components/tree-grid/node-tree/node-tree.component';
import { RowGridComponent } from './components/tree-grid/node-tree/row-grid/row-grid.component';
import {GitHabService} from './services/githab.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NodeEffects } from './store/effects/node.effects';
import {treeReducers} from './store/reducers/tree.reducers';

import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { SvgLoaderComponent } from './components/svg-loader/svg-loader.component';
import {AngularSvgIconModule, SvgLoader} from 'angular-svg-icon';

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
