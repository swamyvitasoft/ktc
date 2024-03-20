import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsale',
  templateUrl: './viewsale.component.html',
  styleUrls: ['./viewsale.component.css']
})
export class ViewsaleComponent implements OnInit{

  constructor(private api:AdminserviceService,private router:Router,){}
  sales:any
  ngOnInit(): void {
    this.api.getSales().subscribe((res)=>{
      this.sales = res
      console.log(this.sales,'sales')
    })
  }

}