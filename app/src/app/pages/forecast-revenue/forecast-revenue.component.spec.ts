import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastRevenueComponent } from './forecast-revenue.component';

describe('ForecastRevenueComponent', () => {
  let component: ForecastRevenueComponent;
  let fixture: ComponentFixture<ForecastRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastRevenueComponent]
    });
    fixture = TestBed.createComponent(ForecastRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
