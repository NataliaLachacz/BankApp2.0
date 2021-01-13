import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountInfoComponent } from './dashboard/account-info/account-info.component';
import { LatestTransactionsComponent } from './dashboard/latest-transactions/latest-transactions.component';
import { MonthlySummaryComponent } from './dashboard/monthly-summary/monthly-summary.component';
import { YearlyChartComponent } from './dashboard/yearly-chart/yearly-chart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TransferComponent } from './transfer/transfer.component';
import { HistoryComponent } from './history/history.component';

import { NgxMaskModule } from 'ngx-mask';
import { AmountColorPipe } from './amount-color.pipe';
import { ConfirmDialogComponent } from './transfer/confirm-dialog/confirm-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AccountInfoComponent,
    LatestTransactionsComponent,
    MonthlySummaryComponent,
    YearlyChartComponent,
    SidebarComponent,
    TransferComponent,
    HistoryComponent,
    AmountColorPipe,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
