import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewitemsComponent } from './viewitems.component';

describe('ViewitemsComponent', () => {
  let component: ViewitemsComponent;
  let fixture: ComponentFixture<ViewitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewitemsComponent]
    });
    fixture = TestBed.createComponent(ViewitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
