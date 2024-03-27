import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todaysales',
  templateUrl: './todaysales.component.html',
  styleUrls: ['./todaysales.component.css']
})
export class TodaysalesComponent implements OnInit{

  constructor(private api:AdminserviceService,private router:Router){}
  todaysales:any
  ngOnInit(): void {
    this.api.getTodaySales().subscribe((res)=>{
      this.todaysales = res
    })
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
