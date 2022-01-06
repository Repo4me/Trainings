import { Injectable } from '@angular/core';
import { patientReports } from "../model/collection";
import { PatientReport } from '../model/pateintReport';


@Injectable({
  providedIn: 'root'
})
export class PatientReportService {

  reports : PatientReport[] = patientReports;

  constructor() { }

  getReports() {
    console.log(" Reports : " + JSON.stringify(this.reports));
    return this.reports;
  }

  getReport(patientName) {
    // this.reports.forEach((patient) => {
    //   if(patient.reportName === patientName) {
    //     console.log(" Reports : " + JSON.stringify(patient));
    //     return patient;
    //   }
    // })

    for (let i = 0; i < this.reports.length; i++) {
      const patient = this.reports[i];

      if(patient.reportName === patientName) {
         console.log(" Reports : " + patient);
        return patient;
      }
      // break;
      
    }
    
    // return this.reports;
  }

  addReport (report) {
    this.reports.push(report);
    this.getReports();
  }
}
