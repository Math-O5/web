import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-horizontal-bar-chart',
  templateUrl: './my-bar-chart.component.html',
})

export class MyHorizontalBar implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: true,
    resonsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2010'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    {data: [45, 65, 87, 87], label: 'Series A'},
    {data: [45, 15, 17, 87], label: 'Series B'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
