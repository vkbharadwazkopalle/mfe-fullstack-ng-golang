import { TestBed } from '@angular/core/testing';

import { HttpClientUtilService } from './http-client-util.service';

describe('HttpClientUtilService', () => {
  let service: HttpClientUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
