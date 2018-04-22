import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { OnlyNumberDirective } from './only-number.directive';

import {EditorModule} from 'primeng/editor';
import { DetailComponent } from './detail/detail.component';
import {DatePipe} from '@angular/common';
import { DetailWithCollspanTableComponent } from './detail-with-collspan-table/detail-with-collspan-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    OnlyNumberDirective,
    DetailComponent,
    DetailWithCollspanTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
