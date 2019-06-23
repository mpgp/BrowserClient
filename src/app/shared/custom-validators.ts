import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  public static matchPassword(form: AbstractControl): null {
    const password = form.get('password').value;
    const passwordRepeat = form.get('passwordRepeat').value;
    if (password !== passwordRepeat) {
      form.get('passwordRepeat').setErrors({ matchPassword: true });
    } else {
      return null;
    }
  }
}
