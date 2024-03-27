import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsalesComponent } from './topsales.component';

describe('TopsalesComponent', () => {
  let component: TopsalesComponent;
  let fixture: ComponentFixture<TopsalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopsalesComponent]
    });
    fixture = TestBed.createComponent(TopsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
