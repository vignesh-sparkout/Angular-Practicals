import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycle } from './life-cycle/life-cycle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, LifeCycle, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  showLifeCycle: boolean = false;
  value: string = 'Vicky';

  onShowOrHide() {
    this.showLifeCycle = !this.showLifeCycle;
  }
}
