import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { BizInformationService } from '../bizInfo/biz-information.service';
import { registerBizAction } from '../shared/validatorsCustom';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.css']
})
export class WorkInformationComponent implements OnInit {

  constructor(public Api:BizInformationService,private router: Router,private route: ActivatedRoute) { }

  companyWork = {
  				patents: '',startDay:'',endDay:'',startHour:'',endHour:'',companyProducts:''
				}

  companyWorkInfo : FormGroup

  ngOnInit() : void {

  	this.companyWorkInfo = new FormGroup({
  		patents : new FormControl(this.companyWork.patents,
        [Validators.required,registerBizAction]),

  		startDay : new FormControl(this.companyWork.startDay),

  		endDay : new FormControl(this.companyWork.endDay),

  		startHour : new FormControl(this.companyWork.startHour),

  		endHour : new FormControl(this.companyWork.endHour),

  		companyProducts : new FormControl(this.companyWork.companyProducts),
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
