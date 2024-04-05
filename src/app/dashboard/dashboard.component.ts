import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { SetgetService } from '../services/setget.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  sales: any;
  ngOnInit(): void {
    let token = localStorage.getItem('utoken');
    if (!token) {
      this.router.navigate(['/']);
    }
    this.api.getSales().subscribe((res) => {
      this.sales = res;
      this.setget.setSalesList(this.sales);
    });
  }
}
