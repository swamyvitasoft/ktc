import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yearsales',
  templateUrl: './yearsales.component.html',
  styleUrls: ['./yearsales.component.css']
})
export class YearsalesComponent implements OnInit{

  constructor(private api:AdminserviceService,private router:Router){}
  yearsales:any
  ngOnInit(): void {
    this.api.getSales().subscribe((res)=>{
      this.yearsales = res
    })
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
