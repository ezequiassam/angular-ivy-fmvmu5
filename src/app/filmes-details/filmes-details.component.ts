import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme, filmes } from '../filmes';

@Component({
  selector: 'app-filmes-details',
  templateUrl: './filmes-details.component.html',
  styleUrls: ['./filmes-details.component.css'],
})
export class FilmesDetailsComponent implements OnInit {
  filme: Filme | undefined;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const filmeId = Number(routeParams.get('filmeId'));
    this.filme = filmes.find((filme) => filme.id == filmeId);
  }
}
