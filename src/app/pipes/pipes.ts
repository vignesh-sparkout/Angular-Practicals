import { Component } from '@angular/core';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CustomPipe } from '../custom-pipe';
import { FilterPipe} from '../filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, AsyncPipe, KeyValuePipe, CommonModule, CustomPipe,FilterPipe,FormsModule],
  templateUrl: './pipes.html',
  styleUrls: ['./pipes.css'],
})
export class Pipes {
  today = new Date();
  dataPromise = new Promise(resolve => {
    setTimeout(() => resolve('Data Loaded'), 2000)
  })
  user = {
    Name: "Vicky",
    Age: 24,
    City: "Coimbatore"

  };
  fruit = "bAnAna";
  Animal = "ELEphant";
  Price = 1500
  City = "Coimbatore"
  vegetables = ["Tomatto","pottato", "Onion", "Brinjal","Drum Stick"]
  marks = 490;
  total = 600;
  searchText = '';

  users = [
    { name: 'Vicky' },
    { name: 'Aravind' },
    { name: 'Kishore' }
  ];

}
