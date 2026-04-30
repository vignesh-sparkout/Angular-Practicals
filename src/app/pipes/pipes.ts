import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom-pipe';
import { FilterPipe } from './filter-pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomPipe, FilterPipe],
  templateUrl: './pipes.html',
  styleUrls: ['./pipes.css'],
})
export class PipesComponent {

  // Date Pipe
  today: Date = new Date();

  // // Async Pipe
  dataPromise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('Data Loaded'), 2000);
        console.log("Data")
  });


  // KeyValue Pipe
  user: { name: string; age: number; city: string } = {
    name: "Vicky",
    age: 24,
    city: "Coimbatore"
  };

  // Text Pipes
  fruit: string = "bAnAna";
  animal: string = "ELEphant";

  // Currency Pipe
  price: number = 1500;

  // Slice Pipe
  city: string = "Coimbatore";

  // JSON Pipe
  vegetables: string[] = [
    "Tomato",
    "Potato",
    "Onion",
    "Brinjal",
    "Drum Stick"
  ];

  // Percent Pipe
  marks: number = 490;
  total: number = 600;

  // Filter Pipe
  searchText: string = '';

  users: { name: string }[] = [
    { name: 'Vicky' },
    { name: 'Aravind' },
    { name: 'Kishore' }
  ];
  //  PURE PIPE TEST (immutable)
  addUserPure() {
    this.users = [...this.users, { name: 'Pure User' }];
  }

  //   (for impure test)
  addUserImpure() {
    this.users.push({ name: 'Impure User' });
  }

}