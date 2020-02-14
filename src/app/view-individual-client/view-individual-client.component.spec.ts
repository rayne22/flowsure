import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndividualClientComponent } from './view-individual-client.component';

describe('ViewIndividualClientComponent', () => {
  let component: ViewIndividualClientComponent;
  let fixture: ComponentFixture<ViewIndividualClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIndividualClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndividualClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
