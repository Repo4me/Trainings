import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportViewComponent } from './report-view/report-view.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'addReport', component : AddReportComponent},
  {path : 'viewReport', component : ReportViewComponent},
  {path : 'viewReport/:patientName', component : PatientDetailsComponent},
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
