//----- Core -----------------------------------------------------//
import { FormGroup } from '@angular/forms';

const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const regexValidators = {
  email: PURE_EMAIL_REGEXP,
  password: PASSWORD_REGEXP
};


export class CustomValidators {
  static checkPasswordMatch(group: FormGroup): any {
    const password = group.controls.password.value;
    const passwordConfirmation = group.controls.passwordConfirm.value;

    return new Promise(resolve => {
      if (!passwordConfirmation) {
        resolve({
          "passwords's don't match": true
        });

      } else {
        resolve(null);
      }
    });
  }

  checkPasswordMatch2 (group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordConfirm.value;
    
    return pass === confirmPass ? null : { notSame: true }
    }
}
