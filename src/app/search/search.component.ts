import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { SetgetService } from '../services/setget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  searchData: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  ngOnInit(): void {
    this.searchData = this.setget.getSearch();
    this.searchData?.forEach((sale: any) => {
      this.total = this.total + sale.estimatedamount;
      this.advance = this.advance + sale.advanceamount;
      this.balance = this.balance + sale.balaceamount;
    });
  }
}
