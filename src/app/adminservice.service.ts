import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONSTANTS } from './constants';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  serverUrl = CONSTANTS.serverUrl
  header: any
  jwttoken(): any {
    this.header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('utoken')
      }),
    }
    return this.header;
  }
  constructor(private http: HttpClient) { }
  adminLogin(data: any) {
    return this.http.post(this.serverUrl + '/user/login', data)
  };
  getSales() {
    return this.http.get(this.serverUrl + '/sale/getsales', this.jwttoken())
  };
  getTodaySales() {
    return this.http.get(this.serverUrl + '/sale/getTodaySales', this.jwttoken())
  };
  getTopSales() {
    return this.http.get(this.serverUrl + '/sale/getTopSales', this.jwttoken())
  };
  getMonthSales() {
    return this.http.get(this.serverUrl + '/sale/getMonthSales', this.jwttoken())
  };
  getYearSales() {
    return this.http.get(this.serverUrl + '/sale/getYearSales', this.jwttoken())
  };

  addSale(data: any) {
    return this.http.post(this.serverUrl + '/sale/addsale', data)
  }
  getItems() {
    return this.http.get(this.serverUrl + '/item/getitems', this.jwttoken())
  };
  addItem(data: any) {
    return this.http.post(this.serverUrl + '/item/additem', data)
  }
}
