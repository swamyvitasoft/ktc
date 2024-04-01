import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewsaleComponent } from './viewsale/viewsale.component';
import { AddSaleComponent } from './addsale/addsale.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AdditemComponent } from './additem/additem.component';
import { TopsalesComponent } from './topsales/topsales.component';
import { TodaysalesComponent } from './todaysales/todaysales.component';
import { MonthsalesComponent } from './monthsales/monthsales.component';
import { YearsalesComponent } from './yearsales/yearsales.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'viewsale', component: ViewsaleComponent },
  { path: 'addsale', component: AddSaleComponent },
  { path: 'viewitems', component: ViewitemsComponent },
  { path: 'additem', component: AdditemComponent },
  { path: 'topsales', component: TopsalesComponent },
  { path: 'todaysales', component: TodaysalesComponent },
  { path: 'monthsales', component: MonthsalesComponent },
  { path: 'yearsales', component: YearsalesComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
