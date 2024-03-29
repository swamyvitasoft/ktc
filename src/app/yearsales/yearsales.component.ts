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
  ngOnInit(): void {
    this.yearlyData = this.setget.getYearly();
    this.yearlyData?.forEach((sale: any) => {
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
