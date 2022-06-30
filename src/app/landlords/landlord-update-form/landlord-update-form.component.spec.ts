import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordUpdateFormComponent } from './landlord-update-form.component';

describe('LandlordUpdateFormComponent', () => {
  let component: LandlordUpdateFormComponent;
  let fixture: ComponentFixture<LandlordUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
