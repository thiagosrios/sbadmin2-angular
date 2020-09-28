import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { AuthLayoutModule } from '../layout/auth/auth-layout.module';
import { MainLayoutModule } from '../layout/main/main-layout.module';
import { DashboardPage } from './dashboard/dashboard-page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';

@NgModule({
    declarations: [
        DashboardPage,
        LoginPage,
        RegisterPage
    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule,
        MainLayoutModule,
        AuthLayoutModule,
    ],
    exports: [
        DashboardPage,
        LoginPage,
        RegisterPage
    ]
})
export class PagesModule { }