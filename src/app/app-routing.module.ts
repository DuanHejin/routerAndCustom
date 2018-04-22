import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StockComponent} from './stock/stock.component';
import {Code404Component} from './code404/code404.component';
import {DetailComponent} from './detail/detail.component';
import { DetailWithCollspanTableComponent } from './detail-with-collspan-table/detail-with-collspan-table.component';

const routes: Routes = [
  {path: 'aa', redirectTo: 'home', pathMatch: 'prefix'},
  {path: 'home', component: HomeComponent},
  {path: 'stock/:id', component: StockComponent, data: [{testValue: "aa"}]},
  {path: 'detail', component: DetailComponent},
  {path: 'detailWithColspan', component: DetailWithCollspanTableComponent},
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
