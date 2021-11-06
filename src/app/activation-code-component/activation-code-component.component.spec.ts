import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationCodeComponentComponent } from './activation-code-component.component';

describe('ActivationCodeComponentComponent', () => {
  let component: ActivationCodeComponentComponent;
  let fixture: ComponentFixture<ActivationCodeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationCodeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationCodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
