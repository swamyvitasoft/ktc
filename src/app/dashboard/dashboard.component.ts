import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../services/adminservice.service';
import { SetgetService } from '../services/setget.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private fb1: FormBuilder,
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  items: any;
  sales: any;
  ngOnInit(): void {
    this.api.getSales().subscribe((res) => {
      this.sales = res;
    });
    this.api.getItems().subscribe((res) => {
      this.items = res;
    });
  }
  daily() {
    this.router.navigate(['/todaysales']);
  }
  monthly() {
    this.router.navigate(['/monthsales']);
  }
  yearly() {
    this.router.navigate(['/yearsales']);
  }
  customers() {
    this.router.navigate(['/customers']);
  }
}
