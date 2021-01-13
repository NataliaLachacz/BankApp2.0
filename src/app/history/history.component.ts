import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  amount: number;
  accountNumber: string;
  title: string;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
  {name: 'Jan Kowalski', amount: 150.50, accountNumber: '53109010304515633680567719', title: 'Zakupy', date: new Date("December 04, 2020 03:24:00")},
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'accountNumber', 'title', 'date'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
