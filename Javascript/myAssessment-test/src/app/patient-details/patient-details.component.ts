import { Component, OnInit } from '@angular/core';
import { PatientReportService } from '../service/patient-report.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PatientReport } from '../model/pateintReport';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient : PatientReport;

  constructor(public service : PatientReportService,
    private router : Router, private activatedRoute : ActivatedRoute) {
      
      this.activatedRoute.paramMap.subscribe(
        (params : ParamMap) => {
          // console.log("PARAM : " + JSON.stringify(this.activatedRoute.paramMap));
          console.log(params.get('patientName'));
          this.patient = this.service.getReport(params.get('patientName'));
          
          
        }
      )

    }

  ngOnInit(): void {
  }

}
