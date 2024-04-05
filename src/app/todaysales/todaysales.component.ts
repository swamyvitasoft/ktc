import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
import { SetgetService } from '../services/setget.service';
@Component({
  selector: 'app-todaysales',
  templateUrl: './todaysales.component.html',
  styleUrls: ['./todaysales.component.css'],
})
export class TodaysalesComponent implements OnInit {
  constructor(
    private api: AdminserviceService,
    private setget: SetgetService
  ) {}
  dailyData: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  createdAt: any;
  ngOnInit(): void {
    const monthyear = this.setget.getMonthYear();
    this.api.getDaily(monthyear).subscribe((res: any) => {
      this.dailyData = res;
      this.dailyData?.forEach((sale: any) => {
        this.createdAt = sale.createdAt;
        this.total = this.total + sale.totalEstimatedAmount;
        this.advance = this.advance + sale.totalAdvanceAmount;
        this.balance = this.balance + sale.totalBalanceAmount;
      });
    });
  }
}
