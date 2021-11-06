import { Component, OnInit } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import  questions from './userManagement.json';


@Component({
  selector: "app-questions",
  templateUrl: "./questionsfinal.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  currentQuestion: string = 'Test';

  public questionList:{name:string,code:string}[]= questions;

  constructor(){
    console.log(questions);
    console.log('above');
  }
  /*
  questions = [
    {
      no: "question1",
      title:`Karibu`,
      text: `Enter password to proceed`,
      subtitle:``
    }
  ];*/

  signup : FormGroup;

  signUpObj = {
    preferredName:'',
    preferredName1:''
  }
//Initialize the formGroup at this point
  ngOnInit() {



  this.signup = new FormGroup ({
    preferredName : new FormControl(this.signUpObj.preferredName,[Validators.required,Validators.minLength(2)]),
    preferredName1 :new FormControl(this.signUpObj.preferredName1,[Validators.required,Validators.minLength(4)])
  });

  }

  switchQuestion(value) {
    alert(value);
    this.currentQuestion = value;
  }
}
