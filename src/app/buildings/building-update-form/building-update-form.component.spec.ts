import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingUpdateFormComponent } from './building-update-form.component';

describe('BuildingUpdateFormComponent', () => {
  let component: BuildingUpdateFormComponent;
  let fixture: ComponentFixture<BuildingUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
