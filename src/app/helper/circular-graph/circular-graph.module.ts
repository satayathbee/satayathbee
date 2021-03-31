import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularGraphComponent } from './circular-graph.component';


@NgModule({
  declarations: [CircularGraphComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CircularGraphComponent
  ]
})
export class CircularGraphModule { }
