import { TestBed } from '@angular/core/testing';

import { IsNotAuthGuard } from './is-not-auth.guard';

describe('IsNotAuthGuard', () => {
  let guard: IsNotAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.get(IsNotAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
