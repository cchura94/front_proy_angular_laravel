import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { NotfoundComponent } from './erros/notfound/notfound.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [authGuard] },
    { path: '', loadChildren: () => import('./web/web.module').then(m => m.WebModule) },
    { path: '**', component: NotfoundComponent }
];
