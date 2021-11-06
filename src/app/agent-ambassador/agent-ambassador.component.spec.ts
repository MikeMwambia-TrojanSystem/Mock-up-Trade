import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAmbassadorComponent } from './agent-ambassador.component';

describe('AgentAmbassadorComponent', () => {
  let component: AgentAmbassadorComponent;
  let fixture: ComponentFixture<AgentAmbassadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAmbassadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
