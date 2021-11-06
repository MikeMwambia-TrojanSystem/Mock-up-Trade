import { UserManagementService } from  '../userService/user-management.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-activation-code-component',
  templateUrl: './activation-code-component.component.html',
  styleUrls: ['./activation-code-component.component.css']
})
export class ActivationCodeComponentComponent implements OnInit {

  constructor(public Api:UserManagementService) { }

  activationForm: FormGroup;

  activationInfo = {
  	code:''
  }


  ngOnInit() {
  	this.activationForm = new FormGroup({
  		code: new FormControl(this.activationInfo.code,
		[Validators.required,Validators.minLength(4)])
  	})
  }




  onActivate(){
	console.warn(this.activationForm.value);
	this.Api.activateAccount(this.activationForm.value).subscribe((result)=>{
		console.log(result); 
	},(err)=>{
		console.log(err);
	})
}

}
