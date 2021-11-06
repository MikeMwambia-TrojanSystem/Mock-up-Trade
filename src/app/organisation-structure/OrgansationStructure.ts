/*export class OrgansationStructure {
	id: number;
	board:{
	availability:string;
	boardChairMail:string;
	boardAlternative:{//Incase there is no board of Directors
		highestOffice:string;
		highestOfficeMail:string;
	};
	};
	management:{
		CEOMD:string;//Shows whether the CEO/MD is same as board chairman
		emailAddress:string;//email of the CEO or MD of the Company
	};
	departments:{
		DepartmentNo:number;
		Departments:[{
			name:string;
			hodmail:string;
			temas:boolean;
		}];
	};
	legal:{
		legalServices:string;
		represent:boolean;
	};
/*
NB:FALSE means NO is selected likewise for when YES is selected it goes for TRUE
If productDevTeam is false recommend the option of having the an investment option 
as a partnership where or tendering to request bids for the job.
Subject to either full funding or some level of funding.
If productTestTeam is false recommend the option of asking for bids for the tasks of testing the
products 
If sourceMaterials is YES ask for bids or tenders to supply the materials--offer this option.

	products:{
		productDevTeam:boolean;
		productTestTeam:boolean;
		sourceMaterials:boolean;
	};


	
}*/

import { Type } from '@angular/core';

export interface OrgansationStructureComponentInterface {
  data: any;
};

export class OrgansationStructure {
  constructor(public component: Type<any>, public data: any) {}
};

