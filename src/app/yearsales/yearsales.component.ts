import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { SetgetService } from '../services/setget.service';

@Component({
  selector: 'app-yearsales',
  templateUrl: './yearsales.component.html',
  styleUrls: ['./yearsales.component.css']
})
export class YearsalesComponent implements OnInit{

  constructor(private api:AdminserviceService,private setget: SetgetService,private router:Router){}
  yearlyData:any
  ngOnInit(): void {
    this.yearlyData = this.setget.getYearly();
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
