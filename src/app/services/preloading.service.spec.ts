import { TestBed } from '@angular/core/testing';

import { PreloadingService } from './preloading.service';

describe('PreloadingService', () => {
  let service: PreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
