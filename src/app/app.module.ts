import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListFilmesComponent } from './list-filmes/list-filmes.component';
import { RouterModule } from '@angular/router';
import { FilmesDetailsComponent } from './filmes-details/filmes-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListFilmesComponent },
      { path: 'filmes/:filmeId', component: FilmesDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ListFilmesComponent,
    FilmesDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
