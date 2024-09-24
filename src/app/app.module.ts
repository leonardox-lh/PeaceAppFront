import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import {HomeComponent} from "./security/components/home/home.component";
import {MainComponent} from "./shared/pages/main/main.component";
import { RegisterComponent } from './security/components/register/register.component';
import { LoginComponent } from './security/components/login/login.component';
import { AccessComponent } from './shared/pages/access/access.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { MapComponent } from './routes/components/map/map.component';
import { ContactsComponent } from './shared/pages/contacts/contacts.component';
import { ReportsComponent } from './reports/pages/reports/reports.component';
import { SearchBarComponent } from './reports/components/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { CardReportComponent } from './reports/components/card-report/card-report.component';
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { ReportWindowComponent } from './reports/components/report-window/report-window.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    AccessComponent,
    MapComponent,
    ContactsComponent,
    ReportsComponent,
    SearchBarComponent,
    CardReportComponent,
    ReportWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
