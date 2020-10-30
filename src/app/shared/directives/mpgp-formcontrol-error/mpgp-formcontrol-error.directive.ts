import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

interface FormControlError {
  matchPassword?: boolean;
  minlength?: { requiredLength: number };
  maxlength?: { requiredLength: number };
  pattern?: { requiredPattern: string };
  required?: {};
}

@Directive({
  selector: '[MpgpFormControlError]',
})
export class MpgpFormControlErrorDirective {
  constructor(private readonly el: ElementRef) {}

  @Input()
  set MpgpFormControlError(errors: ValidationErrors | FormControlError | null) {
    if (!errors) {
      return;
    }

    this.el.nativeElement.textContent = this.getErrorMessage(errors);
  }

  private getErrorMessage(errors: FormControlError): string {
    if (errors.required) {
      return 'Is Required';
    } else if (errors.minlength) {
      return `Minimum Length is ${errors.minlength.requiredLength}`;
    } else if (errors.maxlength) {
      return `Maximum Length is ${errors.maxlength.requiredLength}`;
    } else if (errors.pattern) {
      return `Pattern must be ${errors.pattern.requiredPattern}`;
    } else if (errors.matchPassword) {
      return 'Password did not match';
    } else {
      return 'Invalid value';
    }
  }
}
