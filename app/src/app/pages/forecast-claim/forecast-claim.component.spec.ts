import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastClaimComponent } from './forecast-claim.component';

describe('ForecastClaimComponent', () => {
  let component: ForecastClaimComponent;
  let fixture: ComponentFixture<ForecastClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastClaimComponent]
    });
    fixture = TestBed.createComponent(ForecastClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
