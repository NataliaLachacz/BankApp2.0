import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-yearly-chart',
  templateUrl: './yearly-chart.component.html',
  styleUrls: ['./yearly-chart.component.scss']
})
export class YearlyChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartColors: Color[] = [
    {
      borderColor: '#283747',
      backgroundColor: '#283747'
    },
    {
      borderColor: '#932432',
      backgroundColor: '#932432'
    }
  ]
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 77, 54, 25, 65, 99], label: 'Income' },
    { data: [28, 48, 40, 19, 86, 27, 90, 25, 32, 66, 34, 45], label: 'Expense' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
