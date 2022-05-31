/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AdminService } from './admin.service';

describe('Service: AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminService]
    });
  });

  it('should ...', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));
});
