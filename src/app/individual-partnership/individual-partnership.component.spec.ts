import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPartnershipComponent } from './individual-partnership.component';

describe('IndividualPartnershipComponent', () => {
  let component: IndividualPartnershipComponent;
  let fixture: ComponentFixture<IndividualPartnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualPartnershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
