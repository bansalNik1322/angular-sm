import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/Auth/register/register.component';
import { PasswordComponent } from '../components/Common/password/password.component';

export const routes: Routes = [
    {
        path: "register", component: RegisterComponent
    },
    {
        path: "password",
        component: PasswordComponent
    }
];
