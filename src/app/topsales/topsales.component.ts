import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topsales',
  templateUrl: './topsales.component.html',
  styleUrls: ['./topsales.component.css'],
})
export class TopsalesComponent implements OnInit {
  constructor(private api: AdminserviceService, private router: Router) {}
  topsales: any;
  ngOnInit(): void {
    this.api.getSales().subscribe((res) => {
      this.topsales = res;
    });
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
