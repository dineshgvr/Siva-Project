import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyDetailsComponent } from './add-property-details.component';

describe('AddPropertyDetailsComponent', () => {
  let component: AddPropertyDetailsComponent;
  let fixture: ComponentFixture<AddPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropertyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
