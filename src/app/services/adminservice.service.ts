import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONSTANTS } from '../constants';
@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  serverUrl = CONSTANTS.serverUrl;
  header: any;
  jwttoken(): any {
    this.header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('utoken'),
      }),
    };
    return this.header;
  }
  constructor(private http: HttpClient) {}
  adminLogin(data: any) {
    return this.http.post(this.serverUrl + '/user/login', data);
  }
  addSale(data: any) {
    return this.http.post(this.serverUrl + '/sale/addsale', data);
  }
  getSales() {
    return this.http.get(this.serverUrl + '/sale/getsales', this.jwttoken());
  }
  updateSale(data: any) {
    return this.http.put(
      this.serverUrl + '/sale/update/' + data._id,
      data,
      this.jwttoken()
    );
  }
  deleteSale(data: any) {
    return this.http.delete(
      this.serverUrl + '/sale/delete/' + data._id,
      this.jwttoken()
    );
  }
  getCustomers(){
    return this.http.get(this.serverUrl + '/sale/getCustomers', this.jwttoken());
  }
  getYearly(){
    return this.http.get(this.serverUrl + '/sale/getYearly', this.jwttoken());
  }
  getMonthly(){
    return this.http.get(this.serverUrl + '/sale/getMonthly', this.jwttoken());
  }
  getDaily(){
    return this.http.get(this.serverUrl + '/sale/getDaily', this.jwttoken());
  }

  addItem(data: any) {
    return this.http.post(this.serverUrl + '/item/additem', data);
  }
  getItems() {
    return this.http.get(this.serverUrl + '/item/getitems', this.jwttoken());
  }
  updateItem(data: any) {
    return this.http.put(
      this.serverUrl + '/item/update/' + data._id,
      data,
      this.jwttoken()
    );
  }
  deleteItem(data: any) {
    return this.http.delete(
      this.serverUrl + '/item/delete/' + data._id,
      this.jwttoken()
    );
  }
}
