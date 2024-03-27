import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsalesComponent } from './yearsales.component';

describe('YearsalesComponent', () => {
  let component: YearsalesComponent;
  let fixture: ComponentFixture<YearsalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearsalesComponent]
    });
    fixture = TestBed.createComponent(YearsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
