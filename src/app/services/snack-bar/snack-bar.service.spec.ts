import { TestBed } from '@angular/core/testing';

import { SnackBarService } from './snack-bar.service';

describe('SnackBarService', () => {
  let service: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
