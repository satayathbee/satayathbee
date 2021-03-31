import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circular-graph',
  templateUrl: './circular-graph.component.html',
  styleUrls: ['./circular-graph.component.scss']
})
export class CircularGraphComponent implements OnInit {
  @Input('graphData') graphData: any;
  @Input('size') graphSize: any;
  constructor() { }

  ngOnInit() {
    if (!this.graphSize) {
      this.graphSize = 100
    }
    // console.log(this.graphData);
    
  }

}
