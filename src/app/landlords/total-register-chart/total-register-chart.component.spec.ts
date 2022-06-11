import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRegisterChartComponent } from './total-register-chart.component';

describe('TotalRegisterChartComponent', () => {
  let component: TotalRegisterChartComponent;
  let fixture: ComponentFixture<TotalRegisterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRegisterChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRegisterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
