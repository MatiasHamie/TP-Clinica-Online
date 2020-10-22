import { TestBed } from '@angular/core/testing';

import { VerificarLoginGuard } from './verificar-login.guard';

describe('VerificarLoginGuard', () => {
  let guard: VerificarLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificarLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
