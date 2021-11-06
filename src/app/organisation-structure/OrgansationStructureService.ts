import { Injectable } from '@angular/core';
import { OrganisationStructureComponentIntro } from './org-structure-intro';
import { OrganisationStructureComponentProducts } from './org-structure-products';
import { OrganisationStructureComponentDirectors } from './org-structure-directors';
import { OrganisationStructureComponentDepartments } from './org-structure-departments';
import { OrgansationStructure } from './OrgansationStructure';

@Injectable()

export class AdStructure {
  getAds() {
    return [
      new OrgansationStructure(OrganisationStructureComponentIntro ,{headline: 'Organisation',body: 'Organization section'}),
      /*new OrgansationStructure(OrganisationStructureComponentProducts, {headline: 'Products', body: 'Products section'}),
      new OrgansationStructure(OrganisationStructureComponentDirectors,{name: 'Directors', bio: ' Directors '}),
      new OrgansationStructure(OrganisationStructureComponentDepartments,{headline: 'Departments',body: 'Org Structure Departments'})*/
    ];
  }
}
