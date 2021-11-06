import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { BizInformationService } from '../bizInfo/biz-information.service';
import { registerBizAction } from '../shared/validatorsCustom';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  constructor(public Api:BizInformationService,private router: Router,private route: ActivatedRoute) { }

  productSpecificInfo : FormGroup

  productInfo = {
  	  productName: '',productDescription:'',productRevenue:''
  }

  ngOnInit() : void {

  	this.productSpecificInfo = new FormGroup({
  		productName : new FormControl(this.productInfo.productName,
        [Validators.required,registerBizAction]),

  		productDescription : new FormControl(this.productInfo.productDescription),

  		productRevenue : new FormControl(this.productInfo.productRevenue)
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


