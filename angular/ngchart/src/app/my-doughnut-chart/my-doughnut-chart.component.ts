import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
})

export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartOptions = {
    scaleShowVerticalLines: false,
    resonsive: true
  };
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartType = 'doughnut';
  public doughnutChartLegend = true;
  public doughnutChartData = [25, 25, 25, 25];
  
  constructor() { }

  ngOnInit() {
  }

}
