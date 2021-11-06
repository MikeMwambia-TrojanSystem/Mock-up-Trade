import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgePageComponent } from './pledge-page.component';

describe('PledgePageComponent', () => {
  let component: PledgePageComponent;
  let fixture: ComponentFixture<PledgePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
