import { TestBed } from '@angular/core/testing';

import { DatacardService } from './datacard.service';

describe('DatacardService', () => {
  let service: DatacardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
