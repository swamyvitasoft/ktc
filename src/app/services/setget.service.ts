import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SetgetService {
  salesList: any;
  searchData: any;
  sale: any;
  item: any;
  constructor() {}
  setSalesList(salesList: any) {
    this.salesList = salesList;
  }
  getSalesList() {
    return this.salesList;
  }
  setSearch(searchData: any) {
    this.searchData = searchData;
  }
  getSearch() {
    return this.searchData;
  }
  setEditSale(sale: any) {
    this.sale = sale;
  }
  getEditSale() {
    return this.sale;
  }
  setEditItem(item: any) {
    this.item = item;
  }
  getEditItem() {
    return this.item;
  }
}
