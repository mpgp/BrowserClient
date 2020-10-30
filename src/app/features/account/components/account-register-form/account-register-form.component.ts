import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterAccountCommand } from '~/core/interfaces/register-account-command';
import { CustomValidators } from '~/shared/custom-validators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'account-register-form',
  styleUrls: ['./account-register-form.component.scss'],
  templateUrl: './account-register-form.component.html',
})
export class AccountRegisterFormComponent implements OnInit {
  form!: FormGroup;

  @Output() register = new EventEmitter<RegisterAccountCommand>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group(
      {
        login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
        nickname: [null, [Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[^\s].{1,18}[^\s]$/)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(249)]],
        passwordRepeat: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(249)]],
      },
      { validator: CustomValidators.matchPassword },
    );
  }

  onSubmit(event: Event): void {
    event.stopPropagation();
    this.register.emit(this.form.value);
  }
}
