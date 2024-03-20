import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit{
  constructor(private fb:FormBuilder,private api:AdminserviceService,private router:Router){}
  addSaleform!:FormGroup
  ngOnInit(): void {
    this.addSaleform = this.fb.group({
      fullname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      particulars: ['', [Validators.required]],
      items: ['', [Validators.required]],
      imei: ['', [Validators.required]],
      estimatedamount: ['', [Validators.required]],
      advanceamount: ['', [Validators.required]],
      balaceamount: ['', [Validators.required]],
      
    })

   
  }

  addsale(){
    this.api.addSale(this.addSaleform.value).subscribe((res)=>{
      this.router.navigate(['/viewsale']);
      console.log(res,'addsale')
    })
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }

}
