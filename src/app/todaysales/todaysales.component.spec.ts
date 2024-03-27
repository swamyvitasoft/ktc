import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysalesComponent } from './todaysales.component';

describe('TodaysalesComponent', () => {
  let component: TodaysalesComponent;
  let fixture: ComponentFixture<TodaysalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysalesComponent]
    });
    fixture = TestBed.createComponent(TodaysalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
