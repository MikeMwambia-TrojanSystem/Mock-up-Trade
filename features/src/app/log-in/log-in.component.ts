import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { loginAction } from '../shared/validatorsCustom';
import { UserManagementService } from  '../userService/user-management.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

constructor(public Api:UserManagementService){}




login = {userName:'',password:''}

loginForm : FormGroup;

ngOnInit(): void { 

this.loginForm = new FormGroup({
	
	userName:new FormControl(this.login.userName,
		[Validators.required,Validators.minLength(4),loginAction]),

	password:new FormControl(this.login.password,
		[Validators.required,Validators.minLength(6)])
});

}


onLogin(){
	console.warn(this.loginForm.value);
	this.Api.login(this.loginForm.value).subscribe((result)=>{
		console.log(result);
		console.log("=============");
	},(err)=>{
		console.log(err);
	})
}

}
