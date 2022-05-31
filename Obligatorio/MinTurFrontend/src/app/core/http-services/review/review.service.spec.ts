/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ReviewService } from './review.service';

describe('Service: Review', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewService]
    });
  });

  it('should ...', inject([ReviewService], (service: ReviewService) => {
    expect(service).toBeTruthy();
  }));
});
