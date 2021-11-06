import { FormGroup, FormControl } from '@angular/forms';
//import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Component, Input, OnInit }  from '@angular/core';


import { QuestionBase } from './Questions';
import { QuestionControlService }    from './QuestionControlService';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.form.validator);
    console.log('Above');
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}