import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserManagementService } from  '../userService/user-management.service';

@Component({
  selector: 'app-password-setting',
  templateUrl: './password-setting.component.html',
  styleUrls: ['./password-setting.component.css']
})
export class PasswordSettingComponent implements OnInit {

	show = false;
	see  = false;

	NewpasswordForm: FormGroup;

	passwordResetObj = {
		passsword1: '',
		passsword2: ''
	};

  constructor(public Api:UserManagementService) { }

  ngOnInit() {
  	this.NewpasswordForm = new FormGroup({
  		passsword1 : new FormControl(this.passwordResetObj.passsword1,
  			[Validators.required,Validators.minLength(6)]),

  		passsword2 : new FormControl(this.passwordResetObj.passsword2,
  			[Validators.required,Validators.minLength(6)])

  	});
  }

  passwordReset() {
  	console.log(this.NewpasswordForm.value);
	this.Api.passwrdReset(this.NewpasswordForm.value).subscribe((result)=>{
		console.log(result);
	},(err)=>{
		console.log(err);
	});

  }

}
