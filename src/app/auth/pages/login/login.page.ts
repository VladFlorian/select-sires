//-------------- Core --------------------------------------------------------//
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//-------------- Data Store -------------------------------------------------//
import { AppState } from './../../../app.reducer';
import { Store } from '@ngrx/store';
import * as fromAuth from './../../store/auth.actions';
//-------------- Data Models ------------------------------------------------//
import { authErrorMsgs } from '../../models/auth.model';
import { regexValidators } from '../../../shared/helpers/validators.helper';

@Component({
  selector: "page-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})

export class LoginPage implements OnInit {
  formObj: FormGroup;
  errorMsgs = authErrorMsgs;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formObj = this.fb.group({
      email: ['', [Validators.compose([Validators.pattern(regexValidators.email), Validators.required, Validators.minLength(1)])]],
      password: ['', [Validators.compose([Validators.maxLength(20), Validators.minLength(6), Validators.required])]],
      rememberMe: ['', []],
    });
  }

  signIn() {
    const formValue = this.formObj.value;
    if (this.formObj.valid) {
      this.store.dispatch(new fromAuth.Login({ email: formValue.email, password: formValue.password }));
    }
  }

}
