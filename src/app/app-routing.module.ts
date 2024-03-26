import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewsaleComponent } from './viewsale/viewsale.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AdditemComponent } from './additem/additem.component';

const routes: Routes = [
  {'path':'', component:LoginComponent},
  { 'path':'dashboard',component:DashboardComponent},
  { 'path':'viewsale',component:ViewsaleComponent},
  { 'path':'add-sale',component:AddSaleComponent},
  { 'path':'viewitems',component:ViewitemsComponent},
  { 'path':'additem',component:AdditemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
