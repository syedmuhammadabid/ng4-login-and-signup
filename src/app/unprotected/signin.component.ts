import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,private authService:AuthService) {}

  onSignin() {
    this.authService.signinUser(this.myForm.value);
  }

  ngOnInit():any {
      this.myForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
      });
  }

}
