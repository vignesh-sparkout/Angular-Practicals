import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
id: string | null = '';
name: string='';
role: string='';
 user: any;
constructor (private route:ActivatedRoute, ) {}
ngOnInit(){

    this.user = history.state.user;
    console.log(this.user);

 // Rout Param 
this.route.paramMap.subscribe(prams => {
  this.id=prams.get('id')
});

// Query Param
this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.role = params['role'];
    });
    console.log(history.state);

  }
  
}
