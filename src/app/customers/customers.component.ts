import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor(private api: AdminserviceService) {}
  customers: any;
  ngOnInit(): void {
    this.api.getCustomers().subscribe((res) => {
      this.customers = res;
    });
  }
}
