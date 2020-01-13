import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptingComponent } from './reciepting.component';

describe('RecieptingComponent', () => {
  let component: RecieptingComponent;
  let fixture: ComponentFixture<RecieptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
