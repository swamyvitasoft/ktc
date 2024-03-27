import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthsales',
  templateUrl: './monthsales.component.html',
  styleUrls: ['./monthsales.component.css']
})
export class MonthsalesComponent implements OnInit{

  constructor(private api:AdminserviceService,private router:Router){}
  monthsales:any
  ngOnInit(): void {
    this.api.getSales().subscribe((res)=>{
      this.monthsales = res
    })
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
