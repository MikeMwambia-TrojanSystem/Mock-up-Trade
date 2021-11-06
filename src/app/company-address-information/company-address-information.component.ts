import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { BizInformationService } from '../bizInfo/biz-information.service';
import { registerBizAction } from '../shared/validatorsCustom';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-company-address-information',
  templateUrl: './company-address-information.component.html',
  styleUrls: ['./company-address-information.component.css']
})
export class CompanyAddressInformationComponent implements OnInit {

  constructor(public Api:BizInformationService,private router: Router,private route: ActivatedRoute) { }

    bizAddressInfo = { 
              pysicalLocation: '',companyPostAddress:'',phoneNumber:'',urlWebsite:'',companyEmail:'',
              regionsPresent:'',countries:''
            }

     bizAddress : FormGroup


    ngOnInit() : void {

  	this.bizAddress = new FormGroup({

  		pysicalLocation : new FormControl(this.bizAddressInfo.pysicalLocation,
        [Validators.required,registerBizAction]),

  		companyPostAddress : new FormControl(this.bizAddressInfo.companyPostAddress),

  		phoneNumber : new FormControl(this.bizAddressInfo.phoneNumber),

  		urlWebsite : new FormControl(this.bizAddressInfo.urlWebsite),

  		companyEmail : new FormControl(this.bizAddressInfo.companyEmail),

  		regionsPresent : new FormControl(this.bizAddressInfo.regionsPresent),

  		countries : new FormControl(this.bizAddressInfo.countries)

  	});

}


  onSubmit() {

  }

}