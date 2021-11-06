import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddressInformationComponent } from './company-address-information.component';

describe('CompanyAddressInformationComponent', () => {
  let component: CompanyAddressInformationComponent;
  let fixture: ComponentFixture<CompanyAddressInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddressInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddressInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
