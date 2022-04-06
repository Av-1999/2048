import { Component, OnInit } from '@angular/core';
import { Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit {

  constructor() { }

  sequenceSubscriber(observer: Observer<number>) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    observer.error('noenas')

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {unsubscribe() {}};
  }
  ngOnInit(): void {
    const sequence = new Observable(this.sequenceSubscriber)
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
    if(sequence.subscribe({next(num) {num}})){
      console.log('num ka');
    }
    sequence.subscribe(n => console.log(n))
  }

}
