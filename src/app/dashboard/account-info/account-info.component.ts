import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  accountNumber = '42109023438533965655286250';
  balance = '29999';

  constructor() { }

  ngOnInit(): void {
  }

}
