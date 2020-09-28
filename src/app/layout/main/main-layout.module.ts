import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentFooterComponent } from './content-footer/content-footer.component';
import { LogoMenuComponent } from './logo-menu/logo-menu.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { TopbarSearchComponent } from './topbar-search/topbar-search.component';
import { TopbarAlertsComponent } from './topbar-alerts/topbar-alerts.component';
import { TopbarMessagesComponent } from './topbar-messages/topbar-messages.component';
import { TopbarMessagesXsComponent } from './topbar-messages-xs/topbar-messages-xs.component';
import { TopbarUserInfoComponent } from './topbar-user-info/topbar-user-info.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContentFooterComponent,
    LogoMenuComponent,
    MainLayoutComponent,
    PageHeadingComponent,
    SidebarMenuComponent,
    TopbarComponent,
    TopbarAlertsComponent,
    TopbarMessagesComponent,
    TopbarMessagesXsComponent,
    TopbarSearchComponent,
    TopbarUserInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContentFooterComponent,
    LogoMenuComponent,
    MainLayoutComponent,
    PageHeadingComponent,
    SidebarMenuComponent,
    TopbarComponent,
    TopbarAlertsComponent,
    TopbarMessagesComponent,
    TopbarMessagesXsComponent,
    TopbarSearchComponent,
    TopbarUserInfoComponent
  ]
})
export class MainLayoutModule { }
