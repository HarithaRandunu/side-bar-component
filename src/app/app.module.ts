import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverviewComponent } from './overview/overview.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DisposalsComponent } from './disposals/disposals.component';
import { RequestsComponent } from './requests/requests.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReportsComponent } from './reports/reports.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LogoComponent } from './logo/logo.component';
import { OptionsComponent } from './options/options.component';
import { ContractsComponent } from './contracts/contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    OverviewComponent,
    VendorsComponent,
    DisposalsComponent,
    RequestsComponent,
    NotificationsComponent,
    ReportsComponent,
    LogOutComponent,
    LogoComponent,
    OptionsComponent,
    ContractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
