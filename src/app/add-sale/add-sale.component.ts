import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit{
  constructor(private fb:FormBuilder,private api:AdminserviceService,){}
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
      console.log(res,'addsale')
    })
  }

}
