import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, delay, interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.html',
  styleUrls: ['./observable.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  messages: string[] = [];
  intervalSub!: Subscription;
  // count: number = 0;
  // showComponent: boolean = true; 
  ngOnInit() {

    //  Custom Observable
    const obs = new Observable<string>(observer => {
      observer.next('Hello');
      observer.next('Step 1');

      setTimeout(() => observer.next('Step 2'), 1000);

      setTimeout(() => {
        observer.next('Step 3');
        observer.complete();
      }, 2000);
    });

    obs.subscribe({
      next: (data) => {
        console.log('Custom:', data);
        this.messages.push(data);
      },
      complete: () => console.log('Custom Completed')
    });


    //   API Simulation
    of(['User1', 'User2'])
      .pipe(delay(2000))
      .subscribe(data => {
        console.log('API:', data);
        this.messages.push(...data);
      });


    // //  Interval WITHOUT unsubscribe (for testing issue)
    // interval(1000).subscribe(val => {
    //   console.log('Running:', val);
    //   this.count = val;
    // });

    //  Interval (Auto Stop using take)
    interval(1000)
      .pipe(take(5))   // runs 5 times only
      .subscribe(val => {
        console.log('Interval:', val);
      });

  }
  // //  simulate component destroy manually
  // destroy() {
  //   console.log('Component Destroy button clicked');
  //   this.showComponent = false;
  // }

  ngOnDestroy() {
    console.log('Component Destroy');
  }
}