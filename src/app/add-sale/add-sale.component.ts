import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {
  constructor(private fb: FormBuilder, private api: AdminserviceService, private router: Router) { }
  addSaleform!: FormGroup
  items: any
  ngOnInit(): void {
    this.addSaleform = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      address: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      mobileno: ['', [Validators.required], Validators.minLength(10), Validators.maxLength(10)],
      particulars: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      items: ['', [Validators.required]],
      imei: ['', [Validators.minLength(15), Validators.maxLength(15)]],
      estimatedamount: ['', [Validators.required]],
      advanceamount: ['', [Validators.required]],
      balaceamount: [''],
      note: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]]
    }, { validator: this.amountValidator })
    this.api.getItems().subscribe((res) => {
      this.items = res
    })
    this.addSaleform.get('estimatedamount')?.valueChanges.subscribe(value => {
      this.updateDueAmount();
    });
    this.addSaleform.get('advanceamount')?.valueChanges.subscribe(value => {
      this.updateDueAmount();
    });
  }
  amountValidator(form: FormGroup) {
    const estimatedamount = form.get('estimatedamount')?.value;
    const balaceamount = form.get('balaceamount')?.value;
    const advanceamount = form.get('advanceamount')?.value;

    if (estimatedamount !== (balaceamount + advanceamount)) {
      form.get('estimatedamount')?.setErrors({ 'invalidTotalAmount': true });
    } else {
      form.get('estimatedamount')?.setErrors(null);
    }
  }
  updateDueAmount() {
    const estimatedamount = this.addSaleform.get('estimatedamount')?.value;
    const advanceamount = this.addSaleform.get('advanceamount')?.value;
    const balaceamount = estimatedamount - advanceamount;
    this.addSaleform.patchValue({
      balaceamount: balaceamount
    });
  }

  addsale() {
    this.api.addSale(this.addSaleform.value).subscribe((res) => {
      this.router.navigate(['/viewsale']);
      console.log(res, 'addsale')
    })
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
