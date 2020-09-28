import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layout/auth/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main/main-layout/main-layout.component';

import { LoginComponent } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard-page';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardPage },
      { path: 'dashboard', component: DashboardPage }
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
