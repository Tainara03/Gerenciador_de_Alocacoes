import { TestBed } from '@angular/core/testing';

import { ResourceService } from './resource.service';

describe('ResourceServiceService', () => {
  let service: ResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
