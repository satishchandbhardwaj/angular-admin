import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {zipcodeValidator, passValidator} from './validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform: FormGroup;
  constructor(
    private fb: FormBuilder,
  	private route: ActivatedRoute,
  	private router: Router
  	) {}

  ngOnInit() {
    this.loginform  = this.fb.group({
      useremail: ['', [Validators.required, Validators.email]],
      userpassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get useremail() {
    return this.loginform.get('useremail');
  }

  get userpassword() {
    return this.loginform.get('userpassword');
  }

 

  onSubmit() {
    //console(this.loginform.status);
  // TODO: Use EventEmitter with form value
  console.warn(this.loginform.value);
  this.router.navigate(['/dashboard']);
}

}
