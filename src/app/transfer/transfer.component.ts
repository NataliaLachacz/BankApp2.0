import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  minDate = new Date();
  isChecked = false;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ConfirmDialogComponent);
  }
}
