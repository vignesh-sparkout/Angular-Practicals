import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.html',
  styleUrls: ['./life-cycle.css']
})
export class LifeCycle
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() value: string = 'Default Value';

  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy');
  }
}