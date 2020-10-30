import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthorizeAccountCommand } from '~/core/interfaces/authorize-account-command';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'account-login-form',
  styleUrls: ['./account-login-form.component.scss'],
  templateUrl: './account-login-form.component.html',
})
export class AccountLoginFormComponent implements OnInit {
  form!: FormGroup;

  @Output() submit = new EventEmitter<AuthorizeAccountCommand>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(249)]],
    });
  }

  onSubmit(event: Event): void {
    event.stopPropagation();
    this.submit.emit(this.form.value);
  }
}
