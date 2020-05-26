import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
})

export class MyPieChartComponent implements OnInit {
  public pieChartOptions = {
    scaleShowVerticalLines: false,
    resonsive: true
  };
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData = [25, 25, 25, 25];
  
  constructor() { }

  ngOnInit() {
  }

}
