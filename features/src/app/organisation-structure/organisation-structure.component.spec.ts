import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationStructureComponent } from './organisation-structure.component';

describe('OrganisationStructureComponent', () => {
  let component: OrganisationStructureComponent;
  let fixture: ComponentFixture<OrganisationStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
