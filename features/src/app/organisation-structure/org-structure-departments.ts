import { Component, Input }  from '@angular/core';


import { OrgansationStructureComponentInterface } from './OrgansationStructure';

@Component({
  templateUrl: './org-structure-departments.component.html'
})


export class OrganisationStructureComponentDepartments implements OrgansationStructureComponentInterface {
  @Input() data: any;
}
