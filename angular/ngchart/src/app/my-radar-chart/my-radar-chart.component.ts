import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
})

export class MyRadarChartComponent implements OnInit {
  public radarChartOptions = {
    scaleShowVerticalLines: false,
    resonsive: true
  };
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartType = 'radar';
  public radarChartLegend = true;
  public radarChartData = [
    {data: [45, 65, 87, 87], label: 'Series A'},
    {data: [45, 15, 17, 87], label: 'Series B'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
