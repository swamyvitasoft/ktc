import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleComponent } from './addsale.component';

describe('AddSaleComponent', () => {
  let component: AddSaleComponent;
  let fixture: ComponentFixture<AddSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSaleComponent]
    });
    fixture = TestBed.createComponent(AddSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
