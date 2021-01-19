import { TransfersQuery, TransfersGQL } from './../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'accountNumber', 'title', 'date'];
  transfers$: Observable<TransfersQuery['transfers']>;

  constructor(private transfersGQL: TransfersGQL) { }

  ngOnInit(): void {
    this.transfers$ = this.transfersGQL.watch().valueChanges.pipe(map(result => result.data.transfers));
  }

}
