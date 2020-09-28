import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { MainLayoutModule } from './layout/main/main-layout.module';
import { AuthLayoutModule } from './layout/auth/auth-layout.module';

@NgModule({
  declarations: [AppComponent, DashboardPageComponent, DashboardPageComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    MainLayoutModule,
    AuthLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
