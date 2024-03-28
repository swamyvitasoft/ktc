import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { SetgetService } from '../services/setget.service';
@Component({
  selector: 'app-todaysales',
  templateUrl: './todaysales.component.html',
  styleUrls: ['./todaysales.component.css']
})
export class TodaysalesComponent implements OnInit {
  constructor(private api: AdminserviceService, private setget: SetgetService, private router: Router) { }
  dailyData: any
  ngOnInit(): void {
    this.dailyData = this.setget.getDaily();
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('utoken');
    this.router.navigate(['/']);
  }
}
