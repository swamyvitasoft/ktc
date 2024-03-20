import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  
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

  adminLogin(data:any){
    return this.http.post('http://localhost:3009/user/login',data)
  };

  getSales(){
    return this.http.get('http://localhost:3009/sale/getsales',this.jwttoken())
  };

  addSale(data:any){
    return this.http.post('http://localhost:3009/sale/addsale',data)
  }
}
