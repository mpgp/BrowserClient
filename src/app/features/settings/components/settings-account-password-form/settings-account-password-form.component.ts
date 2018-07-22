import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterAccountCommand } from '~/core/interfaces/register-account-command';
import { CustomValidators } from '~/shared';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'settings-account-password-form',
  styleUrls: ['./settings-account-password-form.component.scss'],
  templateUrl: './settings-account-password-form.component.html',
})
export class SettingsAccountPasswordFormComponent implements OnInit {
  form: FormGroup;

  @Output() submit = new EventEmitter<RegisterAccountCommand>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group(
      {
        oldPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(249)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(249)]],
        passwordRepeat: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(249)]],
      },
      { validator: CustomValidators.matchPassword },
    );
  }

  onSubmit(event: Event): void {
    event.stopPropagation();
    this.submit.emit(this.form.value);
  }
}
