import { CommonModule } from '@angular/common';
import { Component, signal,computed } from '@angular/core';
@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(0)
  search = signal('');
  users = signal([
  { name: 'Vicky' },
  { name: 'Dhina' },
  { name: 'Ram' },
  { name: 'Subash' }
    ]);

  increment(){
    this.count.update(i=>i+1)
  }
  decrement(){
  
    this.count.update(i =>(i>0? i-1:0) )
  }

  filteredUsers = computed(() =>
  this.users().filter(u =>
    u.name.toLowerCase().includes(this.search().toLowerCase())
  )
);
}
