import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterAccountCommand } from '~/core/interfaces/register-account-command';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'settings-account-data-form',
  styleUrls: ['./settings-account-data-form.component.scss'],
  templateUrl: './settings-account-data-form.component.html',
})
export class SettingsAccountDataFormComponent implements OnInit {
  form!: FormGroup;

  @Output() updateAccount = new EventEmitter<RegisterAccountCommand>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      avatar: ['', [Validators.required, Validators.maxLength(249)]],
      languages: ['', [Validators.required, Validators.maxLength(249)]],
      nickname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[^\s].{1,18}[^\s]$/)]],
      statusInfo: ['', [Validators.required, Validators.maxLength(249)]],
    });
  }

  onSubmit(event: Event): void {
    event.stopPropagation();
    this.updateAccount.emit(this.form.value);
  }
}
