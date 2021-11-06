import { TestBed } from '@angular/core/testing';

import { BizInformationService } from './biz-information.service';

describe('BizInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BizInformationService = TestBed.get(BizInformationService);
    expect(service).toBeTruthy();
  });
});
