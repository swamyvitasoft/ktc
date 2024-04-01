import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { SetgetService } from '../services/setget.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css'],
})
export class EdititemComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private api: AdminserviceService,
    private setget: SetgetService,
    private router: Router
  ) {}
  editItemform!: FormGroup;
  item: any;
  ngOnInit(): void {
    this.item = this.setget.getEditItem();
    this.editItemform = this.fb.group({
      _id: [this.item._id],
      itemname: [this.item.itemname, [Validators.required]],
      status: ['active'],
    });
  }
  edititem() {
    this.api.updateItem(this.editItemform.value).subscribe((res: any) => {
      this.router.navigate(['/viewitems']);
    });
  }
}
