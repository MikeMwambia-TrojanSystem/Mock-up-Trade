import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PassowordResetAction } from '../shared/validatorsCustom';
import { UserManagementService} from '../userService/user-management.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})

export class PasswordResetComponent implements OnInit {

userCredentials = { userName:'' }

passwordReset : FormGroup;

constructor(public Api:UserManagementService) {}


ngOnInit():void {
this.passwordReset = new FormGroup ({ 
userName : new FormControl(this.userCredentials.userName,[Validators.required,
  Validators.minLength(6),PassowordResetAction])
  });
};


onReset(){
  this.Api.passwrdReset(this.passwordReset.value).subscribe((result)=>{
  	console.log(result);
  },(err)=>{
  	console.log(err);
  })
}

}
