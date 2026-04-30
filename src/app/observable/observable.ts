import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, map, delay, interval, Subscription, take,filter,switchMap, Subject,debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  templateUrl: './observable.html',
  styleUrls: ['./observable.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  messages: string[] = [];
  intervalSub!: Subscription;
  // count: number = 0;
  // showComponent: boolean = true; 
  search$ = new Subject<string>();

  ngOnInit() {

    this.search$
  .pipe(
    debounceTime(1000),
    switchMap(term => this.fakeSearchApi(term))
  )
  .subscribe(result => {
    console.log('SEARCH RESULT:', result);
    this.messages.push(...result);
  });

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

    //map
    of(10, 20)
  .pipe(map(x => x + 5))
  .subscribe(val => console.log(val));

  of(1, 2, 3, 4)
  .pipe(filter(x => x > 2))
  .subscribe(val => console.log(val))

    //  API Simulation
    of(['User1', 'User2'])
      .pipe(delay(2000))
      .subscribe(data => {
        console.log('API:', data);
        this.messages.push(...data);
      });

      


    //  Interval (Auto Stop using take)
    interval(1000)
      .pipe(take(5))   // runs 5 times only
      .subscribe(val => {
        console.log('Interval:', val);
      });

  }

  fakeSearchApi(term: string) {
  console.log('API CALL FOR:', term);

  return of([
    term + ' result 1',
    term + ' result 2'
  ]).pipe(delay(1000));
}

onSearchChange(value: string) {
  this.search$.next(value);
}


  ngOnDestroy() {
    console.log('Component Destroy');
  }
}
