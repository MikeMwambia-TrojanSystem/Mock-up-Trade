import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { BizInformationService } from '../bizInfo/biz-information.service';
import { registerBizAction } from '../shared/validatorsCustom';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-smeinfo-form',
  templateUrl: './smeinfo-form.component.html',
  styleUrls: ['./smeinfo-form.component.css']
})

export class SMEInfoFormComponent implements OnInit {

  questions: any[];

  constructor(public Api:BizInformationService,private router: Router,
              private route: ActivatedRoute) {

  }

  bizInfo = { 
              registeredName: '',registeredNo:'',registeredCountry:'',
              yearOfRegistration:'',numberOfShares:'',companyType:'',
              pysicalLocation:'',regionsPresent:'',urlWebsite:'',
  			      logo:'',phoneNumber:'',companyEmail:'',startHrs:'',
              endHrs:'',startDay:'',endDay:'',companyValues:'',industry:'',patents:'',
              comodityType:'',productName:'',productImage:'',productDescription:'',
              productRevenue:'',countries:''
            }

  bizInfoForm : FormGroup

  ngOnInit() : void {

    //Write a validate function in the function add a route to redirect to the template where the form is...

  	this.bizInfoForm = new FormGroup({
  		registeredName : new FormControl(this.bizInfo.registeredName,
        [Validators.required,registerBizAction]),

  		registeredNo : new FormControl(this.bizInfo.registeredNo),

  		registeredCountry : new FormControl(this.bizInfo.registeredCountry),

  		yearOfRegistration : new FormControl(this.bizInfo.yearOfRegistration),

  		numberOfShares : new FormControl(this.bizInfo.numberOfShares),

  		companyType : new FormControl(this.bizInfo.companyType),

  		pysicalLocation : new FormControl(this.bizInfo.pysicalLocation),

  		regionsPresent : new FormControl(this.bizInfo.regionsPresent),

      countries: new FormControl(this.bizInfo.countries),

  		urlWebsite : new FormControl(this.bizInfo.urlWebsite),

  		logo : new FormControl(this.bizInfo.logo),

  		phoneNumber : new FormControl(this.bizInfo.phoneNumber),

  		companyEmail : new FormControl(this.bizInfo.companyEmail),

  		startHrs : new FormControl(this.bizInfo.startHrs),

      endHrs : new FormControl(this.bizInfo.endHrs),

  		startDay : new FormControl(this.bizInfo.startDay),

      endDay : new FormControl(this.bizInfo.endDay),

  		companyValues : new FormControl(this.bizInfo.companyValues),

  		industry : new FormControl(this.bizInfo.industry),

  		patents : new FormControl(this.bizInfo.patents),

  		comodityType : new FormControl(this.bizInfo.comodityType),

  		productName : new FormControl(this.bizInfo.productName),

      productImage: new FormControl(this.bizInfo.productImage),

      productDescription: new FormControl(this.bizInfo.productDescription),

      productRevenue: new FormControl(this.bizInfo.productRevenue)
  	});

  }
  

  onSubmit() {

  }

  redirect(){

  }

    openInput(){ 
        document.getElementById("fileInput").click();
   }
}
