import { Component, OnInit } from '@angular/core';
import { AdStructure } from './OrgansationStructureService';
import { OrgansationStructure } from './OrgansationStructure';

@Component({
  selector: 'entry-organisation-structure',
  template: `
    <div>
      <organisation-structure [ads]="ads"></organisation-structure>
    </div>
  `
})

export class OrgStructureEntry implements OnInit {

  ads: OrgansationStructure[];

  constructor(private AdStructure: AdStructure) {}

  ngOnInit() {
    this.ads = this.AdStructure.getAds();
  }
}
