import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { PasswordComponent } from '../../Common/password/password.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    CardModule,
    CheckboxModule,
    CommonModule,
    PasswordComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  password: string = '';
  form: any;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Combine validators in an array
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      console.log('Password:', this.password);
    }
  }
}
