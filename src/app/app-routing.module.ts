import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./shared/pages/main/main.component";
import {AccessComponent} from "./shared/pages/access/access.component";
import {ContactsComponent} from "./shared/pages/contacts/contacts.component";
import {ReportsComponent} from "./reports/pages/reports/reports.component";

const routes: Routes = [
  { path: '', redirectTo: '/access', pathMatch: 'full' },
  { path: 'access', component: AccessComponent},
  { path: 'main', component: MainComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', redirectTo: 'access', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
