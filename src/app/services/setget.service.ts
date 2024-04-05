import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SetgetService {
  salesList: any;
  searchData: any;
  sale: any;
  item: any;
  currentYear: any;
  monthyear: any;
  constructor(private datePipe: DatePipe) {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.monthyear = new Date().getMonth() + 1 + '';
  }
  setCurrentYear(year: any) {
    this.currentYear = year;
  }
  getCurrentYear() {
    return this.currentYear;
  }
  setMonthYear(monthyear1: any) {
    const parsedDate = new Date(monthyear1);
    this.monthyear = this.datePipe.transform(parsedDate, 'MM');
    this.currentYear = this.datePipe.transform(parsedDate, 'yyyy');
  }
  getMonthYear() {
    return this.monthyear + '-' + this.currentYear;
  }
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
