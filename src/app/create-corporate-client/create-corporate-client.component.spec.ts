import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorporateClientComponent } from './create-corporate-client.component';

describe('CreateCorporateClientComponent', () => {
  let component: CreateCorporateClientComponent;
  let fixture: ComponentFixture<CreateCorporateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCorporateClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCorporateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
