import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private api: AdminserviceService,
    private router: Router
  ) {}
  settingsform!: FormGroup;
  sales: any;
  user: any;
  user1: any;
  _id: any;
  ngOnInit(): void {
    this.user1 = localStorage.getItem('user');
    let user = JSON.parse(this.user1);
    this._id = user._id;
    this.settingsform = this.fb.group({
      _id: [this._id],
      password: ['', [Validators.required]],
    });
  }
  changePwd() {
    this.api.updateSettings(this.settingsform.value).subscribe((res) => {
      if(res){
        localStorage.removeItem('user');
        localStorage.removeItem('utoken');
        this.router.navigate(['/']);
      }
      else{
        alert("Network Issue");
      }
    });
  }
}
