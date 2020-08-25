//-------------- Core --------------------------------------------------------//
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//-------------- Data Store --------------------------------------------------//
import { AppState } from './../../../app.reducer';
import { Store } from '@ngrx/store';
import * as authActions from './../../store/auth.actions';
//-------------- Services/Helpers --------------------------------------------//
import { authErrorMsgs } from '../../models/auth.model';
import { regexValidators } from '../../../shared/helpers/validators.helper';

@Component({
  selector: "page-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"]
})

export class ForgotPasswordPage implements OnInit {
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
      email: ['', Validators.compose([Validators.pattern(regexValidators.email), Validators.required, Validators.minLength(1)])],
    });
  }

  resetPassword() {
    const email = this.formObj.value.email;
    if (this.formObj.valid) {
      this.store.dispatch(new authActions.ForgotPassword({email: email}));
    }
  }

}
