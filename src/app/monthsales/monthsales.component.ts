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
  constructor(
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  monthlyData: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  ngOnInit(): void {
    this.monthlyData = this.setget.getMonthly();
    this.monthlyData?.forEach((sale: any) => {
      this.total = this.total + sale.estimatedamount;
      this.advance = this.advance + sale.advanceamount;
      this.balance = this.balance + sale.balaceamount;
    });
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
