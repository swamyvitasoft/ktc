import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { SetgetService } from '../services/setget.service';

@Component({
  selector: 'app-monthsales',
  templateUrl: './monthsales.component.html',
  styleUrls: ['./monthsales.component.css']
})
export class MonthsalesComponent implements OnInit {

  constructor(private api: AdminserviceService, private setget: SetgetService, private router: Router) { }
  monthlyData: any
  ngOnInit(): void {
    this.monthlyData = this.setget.getMonthly();
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
