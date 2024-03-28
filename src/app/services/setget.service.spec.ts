import { TestBed } from '@angular/core/testing';

import { SetgetService } from './setget.service';

describe('SetgetService', () => {
  let service: SetgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
