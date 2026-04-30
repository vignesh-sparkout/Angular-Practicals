import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor (private router:Router, private route: ActivatedRoute){}

  goToProfile(){
    this.router.navigate(['profile'], {relativeTo: this.route})
  }
}
