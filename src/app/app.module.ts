import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccountInfoComponent } from './home/account-info/account-info.component';
import { LatestTransactionsComponent } from './home/latest-transactions/latest-transactions.component';
import { MonthlySummaryComponent } from './home/monthly-summary/monthly-summary.component';
import { YearlyChartComponent } from './home/yearly-chart/yearly-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AccountInfoComponent,
    LatestTransactionsComponent,
    MonthlySummaryComponent,
    YearlyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
