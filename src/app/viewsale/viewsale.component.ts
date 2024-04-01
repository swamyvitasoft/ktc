import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewsale',
  templateUrl: './viewsale.component.html',
  styleUrls: ['./viewsale.component.css'],
})
export class ViewsaleComponent implements OnInit {
  constructor(private api: AdminserviceService, private router: Router) {}
  sales: any;
  total: number = 0;
  advance: number = 0;
  balance: number = 0;
  ngOnInit(): void {
    this.allSales();
  }
  allSales(){
    this.api.getSales().subscribe((res) => {
      this.sales = res;
      this.sales?.forEach((sale: any) => {
        this.total = this.total + sale.estimatedamount;
        this.advance = this.advance + sale.advanceamount;
        this.balance = this.balance + sale.balaceamount;
      });
    });
  }
  edit(row: any){
    this.router.navigate(['/addsale']);
  }
  delete(data: any){
    this.api.deleteSale(data).subscribe((res:any) => {
      this.allSales();
      this.router.navigate(['/viewsale']);
    });
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
