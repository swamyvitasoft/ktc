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
import { EdititemComponent } from './edititem/edititem.component';
import { EditsaleComponent } from './editsale/editsale.component';
import { CustomersComponent } from './customers/customers.component';
import { ExportComponent } from './export/export.component';
import { SettingsComponent } from './settings/settings.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'additem', component: AdditemComponent },
  { path: 'edititem', component: EdititemComponent },
  { path: 'viewitems', component: ViewitemsComponent },
  { path: 'addsale', component: AddSaleComponent },
  { path: 'editsale', component: EditsaleComponent },
  { path: 'viewsale', component: ViewsaleComponent },
  { path: 'topsales', component: TopsalesComponent },
  { path: 'todaysales', component: TodaysalesComponent },
  { path: 'monthsales', component: MonthsalesComponent },
  { path: 'yearsales', component: YearsalesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'export', component: ExportComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'forgot', component: ForgotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
