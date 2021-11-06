import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { registrationAction } from '../shared/validatorsCustom';
import { loginAction } from '../shared/validatorsCustom';
import { UserManagementService } from  '../userService/user-management.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

hide = true;

confirm = true;


registrationCredentials : FormGroup;

registrationObj = {
	firstName : '',
	surName:'',
	userName:'',
	password:'',
	confirmPassword:''
}


constructor(public Api:UserManagementService) { }



ngOnInit() {

this.registrationCredentials = new FormGroup ({

firstName : new FormControl(this.registrationObj.firstName,[Validators.required,Validators.minLength(4)]),

surName : new FormControl(this.registrationObj.surName,[Validators.required,Validators.minLength(4)]),

userName : new FormControl(this.registrationObj.userName,[Validators.required,Validators.minLength(6),loginAction]),

password : new FormControl(this.registrationObj.password,[Validators.required,Validators.minLength(6)]),

confirmPassword : new FormControl(this.registrationObj.confirmPassword,[Validators.required,Validators.minLength(6)])

},{validators:registrationAction});

};


onSignUp(){
	console.log(this.registrationCredentials.value);
	this.Api.addUser(this.registrationCredentials.value).subscribe((result)=>{
		console.log(result);
	},(err)=>{
		console.log(err);
	});
};


};
