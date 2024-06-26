import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
import { SetgetService } from '../services/setget.service';
@Component({
  selector: 'app-yearsales',
  templateUrl: './yearsales.component.html',
  styleUrls: ['./yearsales.component.css'],
})
export class YearsalesComponent implements OnInit {
  constructor(
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  yearlyData: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  createdAt: any;
  ngOnInit(): void {
    this.api.getYearly().subscribe((res: any) => {
      this.yearlyData = res;
      this.yearlyData?.forEach((sale: any) => {
        this.createdAt = sale.createdAt;
        this.total = this.total + sale.totalEstimatedAmount;
        this.advance = this.advance + sale.totalAdvanceAmount;
        this.balance = this.balance + sale.totalBalanceAmount;
      });
    });
  }
  setYear(year: any) {
    this.setget.setCurrentYear(year);
    this.router.navigate(['/monthsales']);
  }
}
