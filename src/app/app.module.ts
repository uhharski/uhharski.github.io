import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatCardModule
} from '@angular/material';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { routeReducers, CustomSerializer } from './store/reducers/router.reducer';
import { RouterEffects } from './store/effects/router.effects';

import { AppRoutingModule } from './router/router';
import { reducers } from './store/reducers';
import { MovieEffects } from './store/effects/movie.effects';
import { GenreEffects } from './store/effects/genre.effects';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MovieService } from './services/movie.service';
import { MessageService } from './services/message.service';
import { GenreService } from './services/genre.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './containers/movies/movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviePageComponent } from './containers/movie-page/movie-page.component';
import { SearchSidenavComponent } from './components/search-sidenav/search-sidenav.component';
import { PosterComponent } from './components/poster/poster.component';


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(routeReducers),
    StoreModule.forFeature('cinema', reducers),
    EffectsModule.forRoot([RouterEffects]),
    EffectsModule.forFeature([MovieEffects, GenreEffects]),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreRouterConnectingModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [ GenreService, MovieService, MessageService, { provide: RouterStateSerializer, useClass: CustomSerializer } ],
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    MoviePageComponent,
    SearchSidenavComponent,
    PosterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
