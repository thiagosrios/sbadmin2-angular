import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule { }