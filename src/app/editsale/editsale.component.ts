import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
import { SetgetService } from '../services/setget.service';

@Component({
  selector: 'app-editsale',
  templateUrl: './editsale.component.html',
  styleUrls: ['./editsale.component.css'],
})
export class EditsaleComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  editSaleform!: FormGroup;
  items: any;
  sale: any;
  ngOnInit(): void {
    this.sale = this.setget.getEditSale();
    this.editSaleform = this.fb.group(
      {
        _id: [this.sale._id],
        sno: [this.sale.sno, [Validators.required]],
        fullname: [
          this.sale.fullname,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
        address: [
          this.sale.address,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(100),
          ],
        ],
        mobileno: [
          this.sale.mobileno,
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        particulars: [
          this.sale.particulars,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
        itemId: [this.sale.itemId, [Validators.required]],
        imei: [
          this.sale.imei,
          [Validators.minLength(15), Validators.maxLength(15)],
        ],
        estimatedamount: [this.sale.estimatedamount, [Validators.required]],
        advanceamount: [this.sale.advanceamount, [Validators.required]],
        balaceamount: [this.sale.balaceamount],
        note: [
          this.sale.note,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(100),
          ],
        ],
        status: ['active'],
      },
      { validator: this.amountValidator }
    );
    this.api.getItems().subscribe((res) => {
      this.items = res;
    });
    this.editSaleform
      .get('estimatedamount')
      ?.valueChanges.subscribe((value) => {
        this.updateDueAmount();
      });
    this.editSaleform.get('advanceamount')?.valueChanges.subscribe((value) => {
      this.updateDueAmount();
    });
  }
  amountValidator(form: FormGroup) {
    const estimatedamount = form.get('estimatedamount')?.value;
    const balaceamount = form.get('balaceamount')?.value;
    const advanceamount = form.get('advanceamount')?.value;
    if (estimatedamount !== balaceamount + advanceamount) {
      form.get('estimatedamount')?.setErrors({ invalidTotalAmount: true });
    } else {
      form.get('estimatedamount')?.setErrors(null);
    }
  }
  updateDueAmount() {
    const estimatedamount = this.editSaleform.get('estimatedamount')?.value;
    const advanceamount = this.editSaleform.get('advanceamount')?.value;
    const balaceamount = estimatedamount - advanceamount;
    this.editSaleform.patchValue({
      balaceamount: balaceamount,
    });
  }
  editsale() {
    this.api.updateSale(this.editSaleform.value).subscribe((res) => {
      this.router.navigate(['/viewsale']);
    });
  }
}
