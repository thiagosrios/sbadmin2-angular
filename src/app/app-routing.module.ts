import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layout/auth/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main/main-layout/main-layout.component';

import { LoginComponent } from './layout/auth/login/login.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardPageComponent },
      { path: 'dashboard', component: DashboardPageComponent }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
