import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topsales',
  templateUrl: './topsales.component.html',
  styleUrls: ['./topsales.component.css'],
})
export class TopsalesComponent implements OnInit {
  constructor(private api: AdminserviceService, private router: Router) {}
  topsales: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  ngOnInit(): void {
    this.api.getSales().subscribe((res) => {
      this.topsales = res;
      this.topsales?.forEach((sale: any) => {
        this.total = this.total + sale.estimatedamount;
        this.advance = this.advance + sale.advanceamount;
        this.balance = this.balance + sale.balaceamount;
      });
    });
  }
}
