import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-snapshot',
  standalone:true,
  imports: [],
  templateUrl: './snapshot.html',
  styleUrl: './snapshot.css',
})
export class Snapshot {
  
  userId:any;
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.userId= this.route.snapshot.paramMap.get('id');
    console.log('Snapshot ID:',this.userId)
  }
}
