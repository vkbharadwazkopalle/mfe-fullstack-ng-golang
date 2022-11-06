import { TestBed } from '@angular/core/testing';

import { AuthRepoService } from './auth-repo.service';

describe('AuthRepoService', () => {
  let service: AuthRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
