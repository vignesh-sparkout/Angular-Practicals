import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css']
})
export class DataBindingComponent {

  title = "String Interpolation";
  btnToggle = true;
  userName = "My Name is";
  constructor() {
    setTimeout(() => {
      this.btnToggle = false;
    }, 2000);
  }

  onChangeTitle() {
    this.title = "This is Event Binding";
  }
}