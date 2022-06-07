import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordFormComponent } from './landlord-form.component';

describe('LandlordFormComponent', () => {
  let component: LandlordFormComponent;
  let fixture: ComponentFixture<LandlordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
