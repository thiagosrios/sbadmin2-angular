import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { AuthLayoutModule } from '../layout/auth/auth-layout.module';
import { MainLayoutModule } from '../layout/main/main-layout.module';
import { DashboardPage } from './dashboard/dashboard-page';
import { FormPage } from './form/form.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { BlankPage } from './blank/blank.page';
import { NotFoundPage } from './not-found/not-found.page';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { TablesPage } from './tables/tables.page';

@NgModule({
	declarations: [
		DashboardPage,
		LoginPage,
		RegisterPage,
		FormPage,
		BlankPage,
		NotFoundPage,
		ForgotPasswordPage,
		TablesPage
	],
	imports: [
		CommonModule,
		RouterModule,
		ComponentsModule,
		MainLayoutModule,
		AuthLayoutModule,
	]
})
export class PagesModule { }