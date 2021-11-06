import { Component, Input } from '@angular/core';

import { OrgansationStructureComponentInterface } from './OrgansationStructure';

@Component({
  templateUrl:'./org-structure-intro.component.html'
})


export class OrganisationStructureComponentIntro implements OrgansationStructureComponentInterface {
  @Input() data: any;

}

