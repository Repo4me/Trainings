import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { countryList  } from "../model/collection";
import { PatientReportService } from '../service/patient-report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  patientReport : FormGroup;
  phoneNumber : FormControl;
  patientName : FormControl;
  email : FormControl;
  remarks : FormControl;
  startDate : FormControl;
  gender : FormControl;
  country : FormControl;

  countries : string[] = countryList;

  emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  phoneNumberPattern : string = '^(\\+\\d{1,3}[- ]?)?\\d{10}$';

  constructor(private fb : FormBuilder,
    private router : Router, private activatedRoute : ActivatedRoute,
    public service : PatientReportService) {
    
    this.patientReport = this.fb.group({
      reportName : fb.control(''),
      phoneNumber : fb.control('', [Validators.required, Validators.minLength(10), Validators.pattern(this.phoneNumberPattern)]),
      email : fb.control('', [Validators.required,Validators.pattern(this.emailPattern)]),
      remarks : fb.control(''),
      startDate : fb.control(''),
      gender : fb.control(''),
      country : fb.control('')
    });

  }

  ngOnInit(): void {
  }

  get f() { return this.patientReport.controls; }

  onSubmit() {
    console.log(this.patientReport.value);
    this.service.addReport(this.patientReport.value);
    this.router.navigate(['../viewReport'], {relativeTo : this.activatedRoute});
    }

}
