import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight';
import { HoverDirective } from "./hover";
import { TogglePasswordDirective } from './toggle-password';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective,HoverDirective,TogglePasswordDirective],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css'],
})
export class DirectivesComponent {

  result: boolean = false;
  grade = "A";

  isActive = false;

  textColor = 'pink';
  bgColor = 'black';
  fontSize = '20px';

  Movies: Movie[] = [
    { id: 1, title: 'Master', director: 'Lokesh', cast: 'Vijay, Sethupathi', releaseDate: '2024' },
    { id: 2, title: 'Love Today', director: 'Pradeep', cast: 'Pradeep, Ivana', releaseDate: '2025' },
    { id: 3, title: 'Sirai', director: 'Suresh', cast: 'Vikram Prabhu', releaseDate: '2026' },
    { id: 4, title: 'With Love', director: 'Madhan', cast: 'Abishan', releaseDate: '2026' },
    { id: 5, title: 'Premalu', director: 'Girish', cast: 'Naslen', releaseDate: '2024' }
  ];

  trackedByMovieId(index: number, movie: Movie) {
    return movie.id ?? index;
  }

  addMovie() {
    this.Movies.push({
      id: Math.random(),
      title: 'Doctor',
      director: 'Nelson',
      cast: 'Sivakarthikeyan',
      releaseDate: '2025'
    });
  }
}

class Movie {
  id!: number;
  title!: string;
  director!: string;
  cast!: string;
  releaseDate!: string;
}
