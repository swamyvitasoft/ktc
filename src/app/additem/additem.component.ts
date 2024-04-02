import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private api: AdminserviceService,
    private router: Router
  ) {}
  addItemform!: FormGroup;
  ngOnInit(): void {
    this.addItemform = this.fb.group({
      itemname: ['', [Validators.required]],
      status: ['active'],
    });
  }
  additem() {
    this.api.addItem(this.addItemform.value).subscribe((res) => {
      this.router.navigate(['/viewitems']);
    });
  }
}
