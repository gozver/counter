import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import * as counterActions from '../state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  increment(){
    this.store.dispatch(counterActions.increment());
  }

  decrement(){
    this.store.dispatch(counterActions.decrement());
  }

  multiply() {
    this.store.dispatch(counterActions.multiply({ n: 2 }));
  }

  divide() {
    this.store.dispatch(counterActions.divide({ n: 2 }));
  }

  reset() {
    this.store.dispatch(counterActions.reset());
  }
}
