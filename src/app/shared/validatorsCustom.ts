import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

const validation = {
	isEmailAddress : function(str){
		var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return pattern.test(str); //Returns boolean
	},
	isNotEmpty : function (str){
		var pattern =/\S+/;
        return pattern.test(str);  // returns a boolean
	},
	isNumber:function (str){
		var pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
	},
	isSame:function (str1,str2){
		return str1 === str2;
	}
};


export function loginAction (control:AbstractControl) {
		var validMail = validation.isEmailAddress(control.value);

		//Validate whether the email or phone number is okay
		var validPhoneNo = validation.isNumber(control.value);
			if(validMail || validPhoneNo){
				return null;
			}
			
			return { invalidCredentials:true }; 
				
};

export function PassowordResetAction (control:AbstractControl) {

		var validMail = validation.isEmailAddress(control.value);
		var isNumber = validation.isNumber(control.value);

		if(validMail || isNumber){

			return null;

		}


		return { invalidCredentials: true };
};


export const registrationAction : ValidatorFn = (control:FormGroup): ValidationErrors | null => {
		const password = control.get('password').value;
		const confirmPassword = control.get('confirmPassword').value;

		const passV = validation.isSame(password,confirmPassword);

		if(passV){
			return null;
		}

		return { invalidCredentials: true };

}

export function registerBizAction (control:FormGroup) {

	const registeredName = control.value;
	if(validation.isNotEmpty(registeredName)) {
		null
	} else {
		return  { invalidCredentials: true };
	}

}
