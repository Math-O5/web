import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-linea-chart',
  templateUrl: './my-linea-chart.component.html',
})

export class MyLineaChartComponent implements OnInit {
  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C' }
  ];
  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineCharColor = [
    {
      backgroundColor: '#fff',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    {
      backgroundColor: '#fff',
      borderColor: 'rgb(103, 158, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    {
      backgroundColor: '#fff',
      borderColor: 'rgb(103, 358, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    // ...colors for additional data sets
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  constructor() { }

  ngOnInit() {
  }

}
