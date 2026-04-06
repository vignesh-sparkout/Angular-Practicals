import { Component, OnInit} from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit{
  users:any[]=[];
  newUser:any = {name:'',email: ''};
  selectedUser: any = null;

  constructor (private api:Api){}
  ngOnInit() {
    this.loadUsers()
  }
  loadUsers (){
    this.api.getUsers().subscribe(res =>{
      this.users = res;
    })
  }
}

