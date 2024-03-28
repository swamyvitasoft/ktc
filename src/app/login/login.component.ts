import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  adminLoginform!: FormGroup;
  constructor(
    private api: AdminserviceService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.adminLoginform = this.fb.group({
      mobileno: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  login() {
    this.api.adminLogin(this.adminLoginform.value).subscribe((res: any) => {
      if (res) {
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('utoken', res.token);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid Credentials');
      }
    });
  }
}
