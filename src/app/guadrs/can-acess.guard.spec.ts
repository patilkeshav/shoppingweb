import { TestBed } from '@angular/core/testing';

import { CanAcessGuard } from './can-acess.guard';

describe('CanAcessGuard', () => {
  let guard: CanAcessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAcessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
