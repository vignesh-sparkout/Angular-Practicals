import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css']
})
export class DataBinding implements OnInit {

  name = "String Interpolation";
  btnToggle: boolean = true;
  userName: string = "My Name is";

  ngOnInit(): void {
    setTimeout(() => {
      this.btnToggle = false;
    }, 2000);
  }

  changeName(){
    this.name = "This is Event Binding";
  }

}