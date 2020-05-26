import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyHorizontalBar } from './my-horizontal-bar/my-bar-chart.component';
import { MyLineaChartComponent } from './my-linea-chart/my-linea-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent },
  {path: 'horizontal-bar-chart', component: MyHorizontalBar },
  {path: 'doughnut-chart', component: MyDoughnutChartComponent },
  {path: 'radar-chart', component: MyRadarChartComponent },
  {path: 'pie-chart', component: MyPieChartComponent },
  {path: 'linea-chart', component: MyLineaChartComponent },
  {path: '**', component: MyBarChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
