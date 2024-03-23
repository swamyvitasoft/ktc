import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(private api:AdminserviceService,private router:Router){}

  sales:any
  ngOnInit(): void {
    this.api.getSales().subscribe((res)=>{
      this.sales = res
    })
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
