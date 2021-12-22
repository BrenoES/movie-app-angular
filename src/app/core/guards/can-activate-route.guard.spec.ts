import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@core/services/auth.service';

import { CanActivateRouteGuard } from './can-activate-route.guard';

describe('CanActivateRouteGuard', () => {
  let guard: CanActivateRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: {} }],
    });
    guard = TestBed.inject(CanActivateRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
