import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // For ngModel
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { PasswordComponent } from '../../Common/password/password.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    CheckboxModule,
    PasswordComponent,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  password: string = '';
  confirmPassword: string = '';

  onSubmit(form: NgForm) {
    console.log('Form Submitted:', {
      ...form.value,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }
}
