import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMEIntroPageComponent } from './smeintro-page.component';

describe('SMEIntroPageComponent', () => {
  let component: SMEIntroPageComponent;
  let fixture: ComponentFixture<SMEIntroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMEIntroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMEIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
