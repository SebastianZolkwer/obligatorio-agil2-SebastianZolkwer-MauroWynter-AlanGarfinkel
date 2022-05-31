/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ImporterService } from './importer.service';

describe('Service: Importer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImporterService]
    });
  });

  it('should ...', inject([ImporterService], (service: ImporterService) => {
    expect(service).toBeTruthy();
  }));
});
