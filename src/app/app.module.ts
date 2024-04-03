import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewsaleComponent } from './viewsale/viewsale.component';
import { AddSaleComponent } from './addsale/addsale.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AdditemComponent } from './additem/additem.component';
import { TopsalesComponent } from './topsales/topsales.component';
import { TodaysalesComponent } from './todaysales/todaysales.component';
import { MonthsalesComponent } from './monthsales/monthsales.component';
import { YearsalesComponent } from './yearsales/yearsales.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { EdititemComponent } from './edititem/edititem.component';
import { EditsaleComponent } from './editsale/editsale.component';
import { CustomersComponent } from './customers/customers.component';
import { ExportComponent } from './export/export.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ViewsaleComponent,
    AddSaleComponent,
    ViewitemsComponent,
    AdditemComponent,
    TopsalesComponent,
    TodaysalesComponent,
    MonthsalesComponent,
    YearsalesComponent,
    SearchComponent,
    FooterComponent,
    EdititemComponent,
    EditsaleComponent,
    CustomersComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
