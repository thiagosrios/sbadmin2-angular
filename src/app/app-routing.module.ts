import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layout/auth/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main/main-layout/main-layout.component';

import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard-page';
import { RegisterPage } from './pages/register/register.page';
import { PagesModule } from './pages/pages.module';
import { FormPage } from './pages/form/form.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardPage },
      { path: 'dashboard', component: DashboardPage },
      { path: 'form', component: FormPage },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage },
    ]
  },   
];

@NgModule({
  imports: [PagesModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
