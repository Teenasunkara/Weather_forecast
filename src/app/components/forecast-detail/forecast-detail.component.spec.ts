import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDetailComponent } from './forecast-detail.component';

describe('ForecastDetailComponent', () => {
  let component: ForecastDetailComponent;
  let fixture: ComponentFixture<ForecastDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
