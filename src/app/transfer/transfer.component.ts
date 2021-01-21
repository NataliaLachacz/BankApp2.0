import { AddTransferGQL, AccountsGQL, AccountsQuery } from './../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit{
  minDate = new Date();
  isChecked = false;
  form: FormGroup;
  accounts$: Observable<AccountsQuery['accounts']>

  constructor(public dialog: MatDialog, private fb: FormBuilder, private addTransfersGQL: AddTransferGQL, private accountsGQL: AccountsGQL) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: new FormControl('', Validators.required),
      senderAccountNumber: new FormControl('', Validators.required),
      name: new FormControl(''),
      title: new FormControl(''),
      date: new FormControl(''),
      type: new FormControl('expense'),
      accountNumber: new FormControl('42109023438533965655286250', Validators.required)
    });

    this.accounts$ = this.accountsGQL.watch().valueChanges.pipe(map(result => result.data.accounts));
  }

  onMakeTransfer(f: NgForm) {
    let date = this.form.value.date;
    this.form.patchValue({
      name: this.form.value.name ? this.form.value.name : '------',
      title: this.form.value.title ? this.form.value.title : '------',
      //2021-01-19 -> hasura(?) odejmuje 1 dzień
      date: date ? (`${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`) : new Date()
    });
    this.accounts$.subscribe((data) => {
      console.log(data[0].balance);
    });
    this.addTransfersGQL.mutate(this.form.value).subscribe(() => {
      f.resetForm();
      this.isChecked = false;
    },
    (error) => console.error(error));
    this.dialog.open(ConfirmDialogComponent);
  }
}
