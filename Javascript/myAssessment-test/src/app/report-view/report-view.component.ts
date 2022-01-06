import { Component, OnInit } from '@angular/core';
import { PatientReportService } from '../service/patient-report.service';
import { PatientReport } from '../model/pateintReport';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  patientReports : PatientReport[];
  //patient : PatientReport;

  constructor(public service : PatientReportService,
    private router : Router, private activatedRoute : ActivatedRoute) { 
    this.patientReports = this.service.getReports(); 
    //this.patient =  this.service.getReport("R1");
    //console.log("patientName " + JSON.stringify(this.patient));
  }

  getPatientReports() {
    return this.service.getReports();
  }

  // getPatientReport(patientName) {
  //   this.patient = this.service.getReport("R1");
  //   console.log("patientName " + JSON.stringify(this.patient));
  //   return this.patient;
  // }

  ngOnInit(): void {
  }

  onSelect(patient) {
    this.router.navigate([patient], {relativeTo : this.activatedRoute})
  }

}
