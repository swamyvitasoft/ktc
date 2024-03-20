import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsaleComponent } from './viewsale.component';

describe('ViewsaleComponent', () => {
  let component: ViewsaleComponent;
  let fixture: ComponentFixture<ViewsaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsaleComponent]
    });
    fixture = TestBed.createComponent(ViewsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
