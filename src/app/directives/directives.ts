import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css'],
})
export class Directives {
  result: boolean = false
  grade = "B"
  isActive=true
  textColor='pink'
  bgColor = 'black'
  fontSize = '20px'
  title = "Top Five Movies";
  Movies: Movie[] = [
    { title: 'Master', director: 'Lokesh kangaraj', cast: 'Vijay, Sedhupathi, Arjun Das', releaseDate: 'May 20, 2024' },
    { title: 'Love Today', director: 'Pradeep Rganathanan', cast: 'Pradeep, Ivana', releaseDate: 'June 15, 2025' },
    { title: 'Sirai', director: 'Suresh Rajkumar', cast: 'Vikram Prabhu', releaseDate: 'Januray 2, 2026' },
    { title: 'With love', director: 'Madhan', cast: 'Abishan Jeevinth , Anaswara Rajan', releaseDate: 'March 05, 2026' },
    { title: 'Premalu', director: ' Girish A.D', cast: 'Naslen, Mamitha Baiju', releaseDate: 'July 25, 2024' }
  ]

}

class Movie {
  title!: string;
  director!: string;
  cast!: string;
  releaseDate!: string;
}

