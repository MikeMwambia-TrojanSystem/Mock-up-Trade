import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMEInfoFormComponent } from './smeinfo-form.component';

describe('SMEInfoFormComponent', () => {
  let component: SMEInfoFormComponent;
  let fixture: ComponentFixture<SMEInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMEInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMEInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
