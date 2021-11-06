import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { BizInformationService } from '../bizInfo/biz-information.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {

	form:FormGroup;
	error:string;
	userId:number=1;//Change this to the id of an the item biz,user or employees
	uploadResponse = { status:'',message:'',filePath:''};

	constructor(private formBuilder: FormBuilder, private bizInformationService: BizInformationService) { }

	ngOnInit() {

		this.form = this.formBuilder.group({
			avatar:['']
		});

  	}

  	onFileChange(event) {
  		if(event.target.files.length>0) {
  			const file = event.target.files[0];
  			this.form.get('avatar').setValue(file);
  		}
  	}

  	onSubmit() {

  		const formData = new FormData();
  		formData.append('file',this.form.get('avatar').value);
  		this.bizInformationService.uploadFiles(formData,this.userId).subscribe(
  			(res) => this.uploadResponse = res,
  			(err) => this.error = err
  		);

  	}


}
