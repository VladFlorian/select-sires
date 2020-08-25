//-------------- Core --------------------------------------------------------//
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
//------------- Data Store --------------------------------------------------//
import { AppState } from './../../../app.reducer';
import { Store } from '@ngrx/store';
import * as authActions from './../../store/auth.actions';
//------------- Services/Helpers --------------------------------------------//
import { regexValidators } from '../../../shared/helpers/validators.helper';
//-------------- Date Models  -----------------------------------------------//
import { authErrorMsgs } from '../../models/auth.model';


@Component({
  selector: "page-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"]
})

export class SignUpPage implements OnInit {
  //--- Core --------------------------------------------------->
  private destroy$: Subject<boolean> = new Subject<boolean>();
  formObj: FormGroup;
  //-- Data Models ---------------------------------------------->
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
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.compose([Validators.pattern(regexValidators.email), Validators.required, Validators.minLength(1)])]],
      phone: ['', [Validators.compose([Validators.minLength(14), Validators.maxLength(15), Validators.required])]],
      password: ['', [Validators.compose([Validators.maxLength(20), Validators.minLength(3), Validators.required])]],
      passwordConfirm: ['', [Validators.compose([Validators.required])]],
      agreedToTerms: [false, [Validators.required]],
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordConfirm.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  createAccount() {
    const formValue = this.formObj.value;

    if (this.formObj.valid) {
      this.store.dispatch(new authActions.SignUp({ signUpFormObj: { ...formValue } }));
    }
  }

  openTerms() {
    //To Do
  }

}
