import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoMenuComponent } from './logo-menu/logo-menu.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { TopbarSearchComponent } from './topbar-search/topbar-search.component';
import { TopbarAlertsComponent } from './topbar-alerts/topbar-alerts.component';
import { TopbarMessagesComponent } from './topbar-messages/topbar-messages.component';
import { TopbarMessagesXsComponent } from './topbar-messages-xs/topbar-messages-xs.component';
import { TopbarUserInfoComponent } from './topbar-user-info/topbar-user-info.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { ContentFooterComponent } from './content-footer/content-footer.component';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
  declarations: [
    LogoMenuComponent,
    SidebarMenuComponent,
    TopbarSearchComponent,
    TopbarAlertsComponent,
    TopbarMessagesComponent,
    TopbarMessagesXsComponent,
    TopbarUserInfoComponent,
    TopbarComponent,
    PageHeadingComponent,
    ContentFooterComponent,
    ColorsComponent
  ],
  imports: [CommonModule],
  exports: [
    LogoMenuComponent,
    SidebarMenuComponent,
    TopbarSearchComponent,
    TopbarAlertsComponent,
    TopbarMessagesComponent,
    TopbarMessagesXsComponent,
    TopbarUserInfoComponent,
    TopbarComponent,
    PageHeadingComponent,
    ContentFooterComponent,
    ColorsComponent
  ]
})
export class LayoutModule { }
