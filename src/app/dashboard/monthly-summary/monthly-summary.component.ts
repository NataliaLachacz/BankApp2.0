import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-summary',
  templateUrl: './monthly-summary.component.html',
  styleUrls: ['./monthly-summary.component.scss']
})
export class MonthlySummaryComponent implements OnInit {

  income = 22500.00;
  expense = 1544.33;

  constructor() { }

  ngOnInit(): void {
  }

}
