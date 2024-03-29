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
    private setget: SetgetService,
    private router: Router
  ) {}
  dailyData: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  ngOnInit(): void {
    this.dailyData = this.setget.getDaily();
    this.dailyData?.forEach((sale: any) => {
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
