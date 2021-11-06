import { Component, Input }  from '@angular/core';

import { OrgansationStructureComponentInterface } from './OrgansationStructure';

@Component({
  templateUrl: './org-structure-products.component.html'
})

export class OrganisationStructureComponentProducts implements OrgansationStructureComponentInterface {
  @Input() data: any;
}
