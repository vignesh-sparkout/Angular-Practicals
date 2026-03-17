import { Component } from '@angular/core';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, AsyncPipe, KeyValuePipe, CommonModule],
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

}
