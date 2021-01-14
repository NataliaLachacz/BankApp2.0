import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

interface Transfer {
  amount: number;
  date: Date;
  name: string;
  senderAccountNumber: string;
  title: string;
  type: string
}

interface Response {
  transfers: Transfer[];
}

const GET_TRANSFERS = gql`
  query Transfers {
    transfers {
      amount
      date
      name
      senderAccountNumber
      title
      type
    }
  }
`;


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'accountNumber', 'title', 'date'];
  transfers$: Observable<Transfer[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.transfers$ = this.apollo.watchQuery<Response>({
      query: GET_TRANSFERS
    }).valueChanges.pipe(map(result => result.data.transfers));
  }

}
