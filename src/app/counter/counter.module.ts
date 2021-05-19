import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './component/counter.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,

    MatButtonModule,
    MatDividerModule
  ]
})
export class CounterModule { }
