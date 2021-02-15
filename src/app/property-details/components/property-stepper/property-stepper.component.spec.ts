import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStepperComponent } from './property-stepper.component';

describe('PropertyStepperComponent', () => {
  let component: PropertyStepperComponent;
  let fixture: ComponentFixture<PropertyStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
