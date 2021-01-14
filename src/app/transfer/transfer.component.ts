import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const ADD_TRANSFER = gql`
  mutation AddTransfer($accountNumber: String!, $amount: numeric!, $date: date!, $name: name!, $senderAccountNumber: String!, $title: String!, $type: String!) {
    insert_transfers(objects: {accountNumber: $accountNumber, amount: $amount, date: $date, name: $name, senderAccountNumber: $senderAccountNumber, title: $title, type: $type}) {
      returning {
        accountNumber
        amount
        date
        name
        senderAccountNumber
        title
        type
        account {
          balance
        }
      }
    }
  }
`;

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit{
  minDate = new Date();
  isChecked = false;
  form: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private apollo: Apollo) { }

  onMakeTransfer() {
    this.apollo.mutate({
      mutation: ADD_TRANSFER,
      variables: this.form.value
    }).subscribe(({data}) => {
      console.log(data);
    },
    (error) => console.error(error));
    this.dialog.open(ConfirmDialogComponent);
  }

  ngOnInit(): void {
   this.form = this.fb.group({
     amount: new FormControl('', Validators.required),
     senderAccountNumber: new FormControl('', Validators.required),
     name: new FormControl('', Validators.required),
     title: new FormControl('', Validators.required),
     date: new FormControl(new Date(), Validators.required),
     type: new FormControl('expense'),
     accountNumber: new FormControl('42109023438533965655286250', Validators.required)
   })
  }
}
