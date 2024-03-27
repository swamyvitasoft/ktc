import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsalesComponent } from './monthsales.component';

describe('MonthsalesComponent', () => {
  let component: MonthsalesComponent;
  let fixture: ComponentFixture<MonthsalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsalesComponent]
    });
    fixture = TestBed.createComponent(MonthsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
