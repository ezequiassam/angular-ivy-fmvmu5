import { Component, OnInit } from '@angular/core';
import { filmes } from '../filmes';

@Component({
  selector: 'app-list-filmes',
  templateUrl: './list-filmes.component.html',
  styleUrls: ['./list-filmes.component.css'],
})
export class ListFilmesComponent {
  filmes = filmes;
}
