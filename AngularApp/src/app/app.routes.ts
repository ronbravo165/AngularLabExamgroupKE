import { Routes } from '@angular/router';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
    {
        path: 'sign-up-component',
        component: SignUpComponentComponent
    },
    {
        path: 'loginform',
        component: LoginformComponent
    },
];
