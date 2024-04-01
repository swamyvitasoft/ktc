import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../services/adminservice.service';
import { SetgetService } from '../services/setget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    private fb1: FormBuilder,
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  searchform!: FormGroup;
  sales: any;
  searchData: any;
  ngOnInit(): void {
    this.searchform = this.fb1.group({
      search: ['', [Validators.required]],
    });
    this.api.getSales().subscribe((res) => {
      this.sales = res;
    });
  }
  search() {
    let filterText = this.searchform.value.search;
    this.searchData = [];
    this.searchData.push(
      this.sales.filter(
        (x: any) => x.sno === Number(filterText) || x.mobileno === filterText
      )[0]
    );
    this.setget.setSearch(this.searchData);
    this.router.navigate(['/search']);
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
