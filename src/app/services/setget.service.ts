import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SetgetService {
  dailyData: any;
  monthlyData: any;
  yearlyData: any;
  constructor() { }
  setDaily(dailyData: any) {
    this.dailyData = dailyData
  }
  getDaily() {
    return this.dailyData
  }
  setMonthly(monthlyData: any) {
    this.monthlyData = monthlyData
  }
  getMonthly() {
    return this.monthlyData
  }
  setYearly(yearlyData: any) {
    this.yearlyData = yearlyData
  }
  getYearly() {
    return this.yearlyData
  }
}
