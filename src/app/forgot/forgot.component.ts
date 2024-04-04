import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  forgotform!: FormGroup;
  constructor(
    private api: AdminserviceService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.forgotform = this.fb.group({
      mobileno: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  forgot() {
    this.api.forgotLogin(this.forgotform.value).subscribe((res: any) => {
      if (res) {
        alert('Contact Server Admin');
      } else {
        alert('Invalid Phone Number');
      }
    });
  }
}
