import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule, 
    ComponentsModule
  ],
  exports: [
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule { }