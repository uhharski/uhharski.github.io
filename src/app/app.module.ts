import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { reducers, CustomSerializer } from './store/router.reducers';
import { RouterEffects } from './store/router.effects';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './router/router';
import {movieReducer} from './store/movie.reducer';
import {MovieEffects} from './store/movie.effects';
import {InMemoryDataService} from './services/in-memory-data.service';
import {MovieService} from './services/movie.service';
import {MessageService} from './services/message.service';
import {MoviesComponent} from './containers/movies/movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviePageComponent } from './containers/movie-page/movie-page.component';


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forRoot([RouterEffects]),
    EffectsModule.forFeature([MovieEffects]),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreRouterConnectingModule
  ],
  providers: [ MovieService, MessageService, { provide: RouterStateSerializer, useClass: CustomSerializer } ],
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    MoviePageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
