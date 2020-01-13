import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorThirdPartyComponent } from './motor-third-party.component';

describe('MotorThirdPartyComponent', () => {
  let component: MotorThirdPartyComponent;
  let fixture: ComponentFixture<MotorThirdPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorThirdPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
