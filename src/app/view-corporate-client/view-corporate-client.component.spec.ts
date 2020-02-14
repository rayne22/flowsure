import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCorporateClientComponent } from './view-corporate-client.component';

describe('ViewCorporateClientComponent', () => {
  let component: ViewCorporateClientComponent;
  let fixture: ComponentFixture<ViewCorporateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCorporateClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCorporateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
