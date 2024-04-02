import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
import { SetgetService } from '../services/setget.service';
@Component({
  selector: 'app-monthsales',
  templateUrl: './monthsales.component.html',
  styleUrls: ['./monthsales.component.css'],
})
export class MonthsalesComponent implements OnInit {
  constructor(private api: AdminserviceService) {}
  monthlyData: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  createdAt: any;
  ngOnInit(): void {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    console.log(currentYear,'currentYear');
    this.api.getMonthly().subscribe((res: any) => {
      this.monthlyData = res;
      this.monthlyData?.forEach((sale: any) => {
        this.createdAt = sale.createdAt
        this.total = this.total + sale.estimatedTotalAmount;
        this.advance = this.advance + sale.advanceTotalAmount;
        this.balance = this.balance + sale.balanceTotalAmount;
      });
    });
  }
}
