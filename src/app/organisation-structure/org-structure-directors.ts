import { Component, Input }  from '@angular/core';

import { OrgansationStructureComponentInterface } from './OrgansationStructure';


@Component({
  templateUrl:'./org-structure-directors.component.html'
})


export class OrganisationStructureComponentDirectors implements OrgansationStructureComponentInterface {
  @Input() data: any;
}
