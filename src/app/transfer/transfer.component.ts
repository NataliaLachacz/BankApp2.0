import { AddTransferGQL } from './../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit{
  minDate = new Date();
  isChecked = false;
  form: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private addTransfersGQL: AddTransferGQL) { }

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
  }

  onMakeTransfer(f: NgForm) {
    let date = this.form.value.date;
    this.form.patchValue({
      name: this.form.value.name ? this.form.value.name : '------',
      title: this.form.value.title ? this.form.value.title : '------',
      date: date ? (`${date.getFullYear()}-${("0"+(date.getMonth()+1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`) : new Date()
    });
    this.addTransfersGQL.mutate(this.form.value).subscribe(() => {
      f.resetForm();
      this.isChecked = false;
    },
    (error) => console.error(error));
    this.dialog.open(ConfirmDialogComponent);
  }
}
