import { TestBed } from '@angular/core/testing';

import { NgxPsComponentsService } from './ngx-ps-components.service';

describe('NgxPsComponentsService', () => {
  let service: NgxPsComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPsComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
